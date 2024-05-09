import {
  CvSectionStandard,
  CvSectionStandardProps,
} from "@/components/CvSection/CvSectionStandard";
import { CvSectionStandardEditData } from "@/components/CvSection/CvSectionStandard/CvSectionStandardEditModal";
import {
  CvContentContainer,
  CvContentContainerProps,
} from "@/containers/CvContentContainer";
import { useCvStore } from "@/state";
import { CvDocumentSectionStandard } from "@/types/CvDocument/CvDocumentSection";

export type CvSectionStandardContainerProps = CvDocumentSectionStandard;

export function CvSectionStandardContainer({
  id,
  heading,
  content,
}: CvSectionStandardContainerProps) {
  const { updateSection } = useCvStore();

  const onUpdate = (data: CvSectionStandardEditData) => {
    const section: CvDocumentSectionStandard = {
      ...data,
      id,
      type: "standard",
      content,
    };
    updateSection(section);
  };

  return (
    <CvSectionStandard heading={heading} onUpdate={onUpdate}>
      {content.map((contentProps) => (
        <CvContentContainer key={contentProps.id} {...contentProps} />
      ))}
    </CvSectionStandard>
  );
}
