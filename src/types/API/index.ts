import { z } from "zod";

// Context
export type ApiContext = {};

// Empty Schema
export const emptySchema = z.object({});
export type EmptySchema = typeof emptySchema;
export type Empty = z.infer<EmptySchema>;

// Mongo ID Schema
export const mongoIdQuerySchema = z.object({
  id: z.string().regex(/^[0-9a-f]{24}$/),
});

export type MongoIdQuerySchema = typeof mongoIdQuerySchema;
export type MongoIdQuery = z.infer<MongoIdQuerySchema>;
