import { ObjectId } from "mongodb";

export function getMongoFilter<T extends { id: string }>(query: Partial<T>) {
  const { id, ...remainingQuery } = query;
  const idFilter = id ? { _id: new ObjectId(id) } : {};
  const mongoFilter = {
    ...idFilter,
    ...remainingQuery,
  };
  return mongoFilter;
}
