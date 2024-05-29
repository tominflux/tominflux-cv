import { z } from "zod";
import { cvDocumentSchema } from "../CvDocument";

export const cvMetaDataDocumentSchema = cvDocumentSchema.pick({
  id: true,
  metadata: true,
});
export type CvMetaDataDocumentSchema = typeof cvMetaDataDocumentSchema;
export type CvMetaDataDocument = z.infer<CvMetaDataDocumentSchema>;
