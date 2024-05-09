"use client";

import { CvSectionHeader } from "@/components/CvSection/CvSectionHeader";
import { useCvStore } from "@/state";
import { CvDocumentSectionHeader } from "@/types/CvDocument/CvDocumentSection";

export type CvSectionHeaderContainerProps = CvDocumentSectionHeader;

export function CvSectionHeaderContainer({
  id,
  name,
}: CvSectionHeaderContainerProps) {
  const { updateSection } = useCvStore();

  const onUpdate = (data: CvDocumentSectionHeader) => {
    updateSection(data);
  };

  return <CvSectionHeader id={id} name={name} onUpdate={onUpdate} />;
}
