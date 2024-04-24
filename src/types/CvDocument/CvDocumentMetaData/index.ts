import { z } from "zod";

export const cvDocumentMetaDataSchema = z.object({
  name: z.string(),
});
export type CvDocumentMetaDataSchema = typeof cvDocumentMetaDataSchema;
export type CvDocumentMetaData = z.infer<CvDocumentMetaDataSchema>;
