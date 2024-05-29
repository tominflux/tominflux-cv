import { z } from "zod";

// GET - Single
export const cvGetSingleQuerySchema = z.object({
  id: z.string(),
});
export type CvGetSingleQuerySchema = typeof cvGetSingleQuerySchema;
export type CvGetSingleQuery = z.infer<CvGetSingleQuerySchema>;
