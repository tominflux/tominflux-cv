import {
  CvDocumentSection,
  CvDocumentSectionContentSupported,
} from "@/types/CvDocument/CvDocumentSection";

export function getContentSupportingSection(
  section: CvDocumentSection
): CvDocumentSectionContentSupported | undefined {
  switch (section.type) {
    case "standard":
      return section;
    default:
      return undefined;
  }
}
