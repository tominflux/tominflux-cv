import { EditDialog, EditDialogProps } from "@/components/UI/EditDialog";
import { TextArea } from "@/components/UI/TextArea";
import { useState } from "react";

export type EditTextAreaDialogProps = {
  value: string;
  onConfirm: (value: string) => void;
} & Omit<EditDialogProps, "children" | "onConfirm">;

export function EditTextAreaDialog({
  isOpen,
  heading,
  subheading,
  value,
  onConfirm,
}: EditTextAreaDialogProps) {
  const [textInputValue, setTextInputValue] = useState<string>(value);

  return (
    <EditDialog
      isOpen={isOpen}
      heading={heading}
      subheading={subheading}
      onConfirm={() => onConfirm(textInputValue)}
    >
      <div className="flex flex-col gap-2 py-2 text-left">
        <TextArea
          value={textInputValue}
          onValueChange={(newValue) => setTextInputValue(newValue)}
        />
      </div>
    </EditDialog>
  );
}
