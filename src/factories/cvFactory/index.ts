import { getMongoCollection } from "@/lib/mongodb";
import { CvDocument } from "@/types/CvDocument";
import { MongoDocument } from "@/types/Factory";
import { getFactoryDocuments } from "@/utils/mongodb/getFactoryDocuments";
import { getMongoFilter } from "@/utils/mongodb/getMongoFilter";
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

  const mongoFilter = getMongoFilter(query);
  const readResult = await cvCollection.find<MongoDocument<CvDocument>>(
    mongoFilter
  );
  const cvDocuments = getFactoryDocuments(await readResult.toArray());

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

async function cvFactoryDelete(query: Partial<CvDocument>) {
  const cvCollection = await getMongoCollection("cv");

  const { id, ...remainingQuery } = query;
  const mongoFilter = {
    _id: id ? new ObjectId(id) : undefined,
    ...remainingQuery,
  };

  const result = await cvCollection.deleteMany(mongoFilter);

  return {
    status: "success",
    data: result.deletedCount,
  };
}

export const CvFactory = {
  create: cvFactoryCreate,
  read: cvFactoryRead,
  update: cvFactoryUpdate,
  delete: cvFactoryDelete,
};
