import { MongoDocument } from "@/types/Factory";

export function getFactoryDocument<T extends { id: string }>(
  mongoDocument: MongoDocument<T>
) {
  const { _id, ...properties } = mongoDocument;
  const document = {
    id: _id.toString(),
    ...properties,
  };
  return document;
}
