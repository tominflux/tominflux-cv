import { z } from "zod";
import { cvDocumentContentSchema } from "../CvDocumentContent";

// Header
export const cvDocumentSectionHeaderSchema = z.object({
  id: z.string(),
  type: z.literal("header"),
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
  id: z.string(),
  type: z.literal("standard"),
  heading: z.string(),
  content: z.array(cvDocumentContentSchema),
});
export type CvDocumentSectionStandardSchema =
  typeof cvDocumentSectionStandardSchema;
export type CvDocumentSectionStandard =
  z.infer<CvDocumentSectionStandardSchema>;

/******************************/

export const cvDocumentSectionContentSupportedSchema = z.discriminatedUnion(
  "type",
  [cvDocumentSectionStandardSchema]
);
export type CvDocumentSectionContentSupportedSchema =
  typeof cvDocumentSectionContentSupportedSchema;
export type CvDocumentSectionContentSupported =
  z.infer<CvDocumentSectionContentSupportedSchema>;

/******************************/

export const cvDocumentSectionSchema = z.discriminatedUnion("type", [
  cvDocumentSectionHeaderSchema,
  cvDocumentSectionStandardSchema,
]);
export type CvDocumentSectionSchema = typeof cvDocumentSectionSchema;
export type CvDocumentSection = z.infer<CvDocumentSectionSchema>;
