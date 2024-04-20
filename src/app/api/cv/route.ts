import { getMongoCollection, getMongoDb } from "@/lib/mongodb";

export async function POST() {
  const cvCollection = await getMongoCollection("cv");

  const documentData = {
    value: "hello world",
  };

  const result = await cvCollection.insertOne({ ...documentData });
  const objectId = result.insertedId;
  const id = objectId.toString();

  const document = {
    id,
    ...documentData,
  };

  return Response.json({
    document,
  });
}
