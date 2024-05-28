import { CvSectionStandard } from "@/components/CvSection/CvSectionStandard";
import { CvContentContainer } from "@/containers/CvContentContainer";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { CvDocumentSectionStandard } from "@/types/CvDocument/CvDocumentSection";
import { useState } from "react";

export interface CapsuleRef {
  id: string;
  element: HTMLDivElement | null;
}

export type CvSectionStandardContainerProps = CvDocumentSectionStandard;

export type CvSectionStandardEditData = Omit<
  CvDocumentSectionStandard,
  "id" | "type"
>;

export function CvSectionStandardContainer({
  id,
  heading,
  content,
}: CvSectionStandardContainerProps) {
  const { openSectionDialog } = useUiStore();

  return (
    <CvSectionStandard
      heading={heading}
      onEditButtonClick={() => openSectionDialog(id)}
    >
      {content.map((contentProps) => (
        <CvContentContainer key={contentProps.id} {...contentProps} />
      ))}
    </CvSectionStandard>
  );
}
