import { CvSectionStandardEditForm } from "@/components/CvSection/CvSectionStandard/CvSectionStandardEditForm";
import { ListIcon } from "@/components/UI/Icons/ListIcon";
import { QuestionMarkIcon } from "@/components/UI/Icons/QuestionMarkIcon";
import { useCvStore } from "@/state";
import { CvDocumentContent } from "@/types/CvDocument/CvDocumentContent";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CapsuleRef, CvSectionStandardEditData } from "..";

export interface CvSectionStandardEditFormContainerProps {
  id: string;
  editData: CvSectionStandardEditData;
  onEdit: (data: Partial<CvSectionStandardEditData>) => void;
  onEditContent: (id: string) => void;
}

export function CvSectionStandardEditFormContainer({
  id,
  editData,
  onEdit,
  onEditContent,
}: CvSectionStandardEditFormContainerProps) {
  const { cv } = useCvStore();

  const section = useMemo(() => {
    const section = (cv?.sections ?? []).find((section) => section.id === id);
    if (!section) return undefined;
    if (section.type !== "standard") return undefined;
    return section;
  }, [cv?.sections, id]);
  const heading = section?.heading;
  const content = section?.content;

  const getContentCapsuleIcon = (contentProps: CvDocumentContent) => {
    switch (contentProps.type) {
      case "list":
        return <ListIcon />;
      case "lorem":
        return <QuestionMarkIcon />;
    }
  };
  const getContentCapsuleLabel = (contentProps: CvDocumentContent) => {
    switch (contentProps.type) {
      case "list":
        return contentProps.heading;
      case "lorem":
        return "Lorem Ipsum";
    }
  };

  return (
    <CvSectionStandardEditForm
      headingInputValue={editData?.heading ?? heading ?? ""}
      onHeadingInputChange={(value) =>
        onEdit({
          heading: value,
        })
      }
      content={(editData?.content ?? content ?? []).map((contentProps) => ({
        id: contentProps.id,
        icon: getContentCapsuleIcon(contentProps),
        label: getContentCapsuleLabel(contentProps),
        onEdit: () => onEditContent(contentProps.id),
        onDelete: () => {},
      }))}
    />
  );
}
