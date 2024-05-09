import { Button } from "@/components/UI/Button";
import { Overlay } from "@/components/UI/Overlay";
import { ReactNode, useState } from "react";
import { CvSectionStandardEditModal } from "./CvSectionStandardEditModal";
import { EditDialogOverlay } from "@/components/UI/EditDialogOverlay";
import { TextInput } from "@/components/UI/TextInput";

export interface CvSectionStandardEditData {
  heading: string;
}
export interface CvSectionStandardProps {
  heading: string;
  children: ReactNode;
  onUpdate?: (data: CvSectionStandardEditData) => void;
}

export function CvSectionStandard({
  heading,
  children,
  onUpdate,
}: CvSectionStandardProps) {
  const [editedHeading, setEditedHeading] = useState<string | undefined>(
    undefined
  );

  const editedData: CvSectionStandardEditData = {
    heading: editedHeading ?? heading,
  };

  return (
    <EditDialogOverlay
      className={`w-full py-3`}
      dialogContent={
        <div className="flex flex-col gap-2 py-2 text-left">
          <TextInput
            label="Title"
            value={editedHeading ?? heading}
            onValueChange={(value) => setEditedHeading(value)}
          />
        </div>
      }
      onDialogConfirm={onUpdate ? () => onUpdate(editedData) : undefined}
    >
      {heading ? <h3 className="text-2xl mb-2">{heading}</h3> : undefined}
      <div className={`px-3`}>{children}</div>
    </EditDialogOverlay>
  );
}
