import { getMongoCollection } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const cvCollection = await getMongoCollection("cv");

  const result = await cvCollection.findOne<{
    _id: ObjectId;
    value: string;
  }>({ _id: new ObjectId(id) });
  const { _id, ...documentData } = result ?? {};
  const document = {
    id: _id?.toString(),
    ...documentData,
  };

  return Response.json({
    document,
  });
}
