import {
  CvSectionHeader,
  CvSectionHeaderProps,
} from "@/components/CvSection/CvSectionHeader";

export type CvSectionHeaderContainerProps = CvSectionHeaderProps;

export function CvSectionHeaderContainer({
  name,
}: CvSectionHeaderContainerProps) {
  return <CvSectionHeader name={name} />;
}
