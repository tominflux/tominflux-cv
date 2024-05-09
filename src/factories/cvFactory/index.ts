import { getMongoCollection } from "@/lib/mongodb";
import { CvDocument } from "@/types/CvDocument";
import { MongoDocument } from "@/types/Factory/FactoryDocument";
import { ObjectId } from "mongodb";

async function cvFactoryCreate(data: Omit<CvDocument, "id">) {
  const cvCollection = await getMongoCollection("cv");

  const insertResult = await cvCollection.insertOne({ ...data });
  const objectId = insertResult.insertedId;
  const id = objectId.toString();

  const cvDocument: CvDocument = {
    id,
    ...data,
  };

  return {
    status: "success",
    data: cvDocument,
  };
}

async function cvFactoryRead(query: Partial<CvDocument>) {
  const cvCollection = await getMongoCollection("cv");

  const { id, ...remainingQuery } = query;
  const mongoFilter = {
    _id: id ? new ObjectId(id) : undefined,
    ...remainingQuery,
  };

  const readResult = await cvCollection.find(mongoFilter);
  const readResultData = await readResult.toArray();

  const cvDocuments = readResultData.map(({ _id, ...readResultDocument }) => ({
    id: _id.toString(),
    ...readResultDocument,
  }));

  return {
    status: "success",
    data: cvDocuments,
  };
}

async function cvFactoryUpdate(
  data: CvDocument
): Promise<{ status: "success"; data: CvDocument } | { status: "not-found" }> {
  const cvCollection = await getMongoCollection("cv");

  const { id, ...documentData } = data;
  const mongoDocument: MongoDocument<CvDocument> = {
    _id: new ObjectId(id),
    ...documentData,
  };

  const updateResult = await cvCollection.replaceOne(
    { _id: mongoDocument._id },
    mongoDocument,
    { upsert: false }
  );
  if (updateResult.matchedCount === 0) {
    return {
      status: "not-found",
    };
  }

  return {
    status: "success",
    data,
  };
}

export const CvFactory = {
  create: cvFactoryCreate,
  read: cvFactoryRead,
  update: cvFactoryUpdate,
};
