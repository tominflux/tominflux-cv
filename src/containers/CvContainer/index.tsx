import { CvLayout } from "@/components/CvLayout";
import {
  CvSectionContainer,
  CvSectionContainerProps,
} from "../CvSectionContainer";

export interface CvContainerProps {
  sections: CvSectionContainerProps[];
}

export function CvContainer({ sections }: CvContainerProps) {
  return (
    <CvLayout>
      {sections.map((sectionProps) => (
        <CvSectionContainer {...sectionProps} />
      ))}
    </CvLayout>
  );
}
