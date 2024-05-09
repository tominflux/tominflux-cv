"use client";

import {
  CvSectionHeader,
  CvSectionHeaderProps,
} from "@/components/CvSection/CvSectionHeader";
import { CvDocumentSectionHeader } from "@/types/CvDocument/CvDocumentSection";

export type CvSectionHeaderContainerProps = CvSectionHeaderProps;

export function CvSectionHeaderContainer({
  name,
}: CvSectionHeaderContainerProps) {
  const onUpdate = (data: CvDocumentSectionHeader) => {
    console.log("DEBUG", data);
  };

  return <CvSectionHeader name={name} onUpdate={onUpdate} />;
}
