import { EditDialog } from "@/components/UI/EditDialog";
import { TextInput } from "@/components/UI/TextInput";

export interface EditMetaDataDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  nameInputValue: string;
  onNameInputChange: (value: string) => void;
  onNameInputApply: (value: string) => void;
}

export function EditMetaDataDialog({
  isOpen,
  onConfirm,
  nameInputValue,
  onNameInputChange,
  onNameInputApply,
}: EditMetaDataDialogProps) {
  return (
    <EditDialog isOpen={isOpen} heading="Edit MetaData" onConfirm={onConfirm}>
      <div className="flex flex-col gap-2 py-2 text-left">
        <TextInput
          label="Name"
          value={nameInputValue}
          onValueChange={onNameInputChange}
          onValueApply={onNameInputApply}
        />
      </div>
    </EditDialog>
  );
}
