import { MongoDocument } from "@/types/Factory";
import { getFactoryDocument } from "../getFactoryDocument";

export function getFactoryDocuments<T extends { id: string }>(
  mongoDocuments: MongoDocument<T>[]
) {
  return mongoDocuments.map((mongoDocument) =>
    getFactoryDocument(mongoDocument)
  );
}
