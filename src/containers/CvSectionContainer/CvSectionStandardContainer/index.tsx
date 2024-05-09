import {
  CvSectionStandard,
  CvSectionStandardProps,
} from "@/components/CvSection/CvSectionStandard";
import {
  CvContentContainer,
  CvContentContainerProps,
} from "@/containers/CvContentContainer";
import { CvDocumentSectionStandard } from "@/types/CvDocument/CvDocumentSection";

export type CvSectionStandardContainerProps = CvDocumentSectionStandard;

export function CvSectionStandardContainer({
  heading,
  content,
}: CvSectionStandardContainerProps) {
  return (
    <CvSectionStandard heading={heading}>
      {content.map((contentProps) => (
        <CvContentContainer {...contentProps} />
      ))}
    </CvSectionStandard>
  );
}
