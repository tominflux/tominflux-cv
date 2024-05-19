import { EditDialog, EditDialogProps } from "@/components/UI/EditDialog";
import { TextInput } from "@/components/UI/TextInput";
import { useState } from "react";

export type EditTextFieldDialogProps = {
  value: string;
  onConfirm: (value: string) => void;
} & Omit<EditDialogProps, "children" | "onConfirm">;

export function EditTextFieldDialog({
  isOpen,
  heading,
  subheading,
  value,
  onConfirm,
}: EditTextFieldDialogProps) {
  const [textInputValue, setTextInputValue] = useState<string>(value);

  return (
    <EditDialog
      isOpen={isOpen}
      heading={heading}
      subheading={subheading}
      onConfirm={() => onConfirm(textInputValue)}
    >
      <div className="flex flex-col gap-2 py-2 text-left">
        <TextInput
          value={textInputValue}
          onValueChange={(newValue) => setTextInputValue(newValue)}
        />
      </div>
    </EditDialog>
  );
}
