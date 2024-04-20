import { ObjectId } from "mongodb";

export type FactoryDocument<T> = {
  id: string;
} & T;

export type FactoryDocumentFilter<T> = Partial<FactoryDocument<T>>;

export type MongoDocument<T> = {
  _id: ObjectId;
} & T;
