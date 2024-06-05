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

export type CvSectionStandardContainerProps = CvDocumentSectionStandard & {
  isEditable?: boolean;
};

export type CvSectionStandardEditData = Omit<
  CvDocumentSectionStandard,
  "id" | "type"
>;

export function CvSectionStandardContainer({
  id,
  heading,
  content,
  isEditable = true,
}: CvSectionStandardContainerProps) {
  const { openSectionDialog } = useUiStore();

  return (
    <CvSectionStandard
      heading={heading}
      onEditButtonClick={isEditable ? () => openSectionDialog(id) : undefined}
    >
      {content.map((contentProps) => (
        <CvContentContainer key={contentProps.id} {...contentProps} />
      ))}
    </CvSectionStandard>
  );
}
