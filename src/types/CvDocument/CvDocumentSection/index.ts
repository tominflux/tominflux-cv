import { z } from "zod";
import { cvDocumentContentSchema } from "../CvDocumentContent";

// Header
export const cvDocumentSectionHeaderSchema = z.object({
  type: z.literal("header"),
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
});
export type CvDocumentSectionHeaderSchema =
  typeof cvDocumentSectionHeaderSchema;
export type CvDocumentSectionHeader = z.infer<CvDocumentSectionHeaderSchema>;

// Standard
export const cvDocumentSectionStandardSchema = z.object({
  type: z.literal("standard"),
  id: z.string(),
  heading: z.string(),
  content: z.array(cvDocumentContentSchema),
});
export type CvDocumentSectionStandardSchema =
  typeof cvDocumentSectionStandardSchema;
export type CvDocumentSectionStandard =
  z.infer<CvDocumentSectionStandardSchema>;

/******************************/

export const cvDocumentSectionSchema = z.discriminatedUnion("type", [
  cvDocumentSectionHeaderSchema,
  cvDocumentSectionStandardSchema,
]);
export type CvDocumentSectionSchema = typeof cvDocumentSectionSchema;
export type CvDocumentSection = z.infer<CvDocumentSectionSchema>;
