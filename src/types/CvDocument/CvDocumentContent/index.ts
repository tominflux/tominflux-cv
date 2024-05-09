import { z } from "zod";

// List
export const cvDocumentContentListSchema = z.object({
  id: z.string(),
  type: z.literal("list"),
  heading: z.string(),
  items: z.array(
    z.object({
      id: z.string(),
      value: z.string(),
    })
  ),
});
export type CvDocumentContentListSchema = typeof cvDocumentContentListSchema;
export type CvDocumentContentList = z.infer<CvDocumentContentListSchema>;

// Lorem
export const cvDocumentContentLoremSchema = z.object({
  id: z.string(),
  type: z.literal("lorem"),
  value: z.string(),
});
export type CvDocumentContentLoremSchema = typeof cvDocumentContentLoremSchema;
export type CvDocumentContentLorem = z.infer<CvDocumentContentLoremSchema>;

/******************************/

export const cvDocumentContentSchema = z.discriminatedUnion("type", [
  cvDocumentContentListSchema,
  cvDocumentContentLoremSchema,
]);
export type CvDocumentContentSchema = typeof cvDocumentContentSchema;
export type CvDocumentContent = z.infer<CvDocumentContentSchema>;
