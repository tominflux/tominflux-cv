import { ObjectId } from "mongodb";

export function getMongoFilter<T extends { id: string }>(query: Partial<T>) {
  const { id, ...remainingQuery } = query;
  const mongoFilter = {
    _id: id ? new ObjectId(id) : undefined,
    ...remainingQuery,
  };
  return mongoFilter;
}
