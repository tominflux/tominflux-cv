import { z } from "zod";
import { cvDocumentSectionSchema } from "./CvDocumentSection";
import { cvDocumentMetaDataSchema } from "./CvDocumentMetaData";

export const cvDocumentSchema = z.object({
  metadata: cvDocumentMetaDataSchema,
  sections: z.array(cvDocumentSectionSchema),
});
export type CvDocumentSchema = typeof cvDocumentSchema;
export type CvDocument = z.infer<CvDocumentSchema>;
