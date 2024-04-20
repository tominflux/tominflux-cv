import { z } from "zod";
import { cvDocumentSectionSchema } from "./CvDocumentSection";

export const cvDocumentSchema = z.object({
  sections: z.array(cvDocumentSectionSchema),
});
export type CvDocumentSchema = typeof cvDocumentSchema;
export type CvDocument = z.infer<CvDocumentSchema>;
