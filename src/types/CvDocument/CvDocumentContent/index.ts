import { z } from "zod";

// List
export const cvDocumentContentListSchema = z.object({
  heading: z.string(),
  items: z.array(z.string()),
});
export type CvDocumentContentListSchema = typeof cvDocumentContentListSchema;
export type CvDocumentContentList = z.infer<CvDocumentContentListSchema>;

// Lorem
export const cvDocumentContentLoremSchema = z.object({
  value: z.string(),
});
export type CvDocumentContentLoremSchema = typeof cvDocumentContentLoremSchema;
export type CvDocumentContentLorem = z.infer<CvDocumentContentLoremSchema>;

/******************************/

export const cvDocumentContentSchema = z.discriminatedUnion("type", [
  cvDocumentContentListSchema.extend({ type: z.literal("list") }),
  cvDocumentContentLoremSchema.extend({ type: z.literal("lorem") }),
]);
export type CvDocumentContentSchema = typeof cvDocumentContentSchema;
export type CvDocumentContent = z.infer<CvDocumentContentSchema>;
