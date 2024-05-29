import { ObjectId } from "mongodb";

export type MongoDocument<T> = {
  _id: ObjectId;
} & Omit<T, "id">;
