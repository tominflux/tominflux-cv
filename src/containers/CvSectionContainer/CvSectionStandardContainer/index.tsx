import { CvSectionStandard } from "@/components/CvSection/CvSectionStandard";
import { CvContentContainer } from "@/containers/CvContentContainer";
import { useCvStore } from "@/state";
import { CvDocumentSectionStandard } from "@/types/CvDocument/CvDocumentSection";
import { useState } from "react";
import { CvSectionStandardEditFormContainer } from "./CvSectionStandardEditForm";

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
  const { cv, updateSection } = useCvStore();

  const [editData, setEditData] = useState<CvSectionStandardEditData>({
    heading,
    content,
  });

  const onUpdate: () => void = () => {
    const section: CvDocumentSectionStandard = {
      id,
      type: "standard",
      ...editData,
    };
    updateSection(section);
  };

  return (
    <CvSectionStandard
      heading={heading}
      onUpdate={onUpdate}
      editForm={
        <CvSectionStandardEditFormContainer
          id={id}
          editData={editData}
          onEdit={(newEditData) => {
            setEditData((prevEditData) => ({
              ...prevEditData,
              ...newEditData,
            }));
          }}
        />
      }
    >
      {content.map((contentProps) => (
        <CvContentContainer key={contentProps.id} {...contentProps} />
      ))}
    </CvSectionStandard>
  );
}
