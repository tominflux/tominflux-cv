import { EditDialogOverlay } from "@/components/UI/EditDialogOverlay";
import { TextInput } from "@/components/UI/TextInput";
import { ReactNode, useState } from "react";

export interface CvSectionStandardEditData {
  heading: string;
}
export interface CvSectionStandardProps {
  heading: string;
  children: ReactNode;
  editForm: ReactNode;
  onUpdate?: () => void;
}

export function CvSectionStandard({
  heading,
  children,
  editForm,
  onUpdate,
}: CvSectionStandardProps) {
  return (
    <EditDialogOverlay
      className={`w-full py-3`}
      dialogHeading="Edit Section"
      dialogContent={editForm}
      onDialogConfirm={onUpdate ? () => onUpdate() : undefined}
    >
      {heading ? <h3 className="text-2xl mb-2">{heading}</h3> : undefined}
      <div className={`px-3`}>{children}</div>
    </EditDialogOverlay>
  );
}
