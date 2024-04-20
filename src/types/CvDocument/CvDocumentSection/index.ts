import { z } from "zod";
import { cvDocumentContentSchema } from "../CvDocumentContent";

// Header
export const cvDocumentSectionHeaderSchema = z.object({
  name: z.string(),
});

export type CvDocumentSectionHeaderSchema =
  typeof cvDocumentSectionHeaderSchema;
export type CvDocumentSectionHeader = z.infer<CvDocumentSectionHeaderSchema>;

// Standard
export const cvDocumentSectionStandardSchema = z.object({
  heading: z.string(),
  content: z.array(cvDocumentContentSchema),
});
export type CvDocumentSectionStandardSchema =
  typeof cvDocumentSectionStandardSchema;
export type CvDocumentSectionStandard =
  z.infer<CvDocumentSectionStandardSchema>;

/******************************/

export const cvDocumentSectionSchema = z.discriminatedUnion("type", [
  cvDocumentSectionHeaderSchema.extend({ type: z.literal("header") }),
  cvDocumentSectionStandardSchema.extend({ type: z.literal("standard") }),
]);
export type CvDocumentSectionSchema = typeof cvDocumentSectionSchema;
export type CvDocumentSection = z.infer<CvDocumentSectionSchema>;
