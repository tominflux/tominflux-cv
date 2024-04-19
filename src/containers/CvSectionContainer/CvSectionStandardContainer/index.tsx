import {
  CvSectionStandard,
  CvSectionStandardProps,
} from "@/components/CvSection/CvSectionStandard";
import {
  CvContentContainer,
  CvContentContainerProps,
} from "@/containers/CvContentContainer";

export type CvSectionStandardContainerProps = Omit<
  CvSectionStandardProps,
  "children"
> & {
  content: CvContentContainerProps[];
};

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
