import { EditDialog } from "@/components/UI/EditDialog";
import { TextInput } from "@/components/UI/TextInput";

export interface EditSectionHeaderDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  nameInputValue: string;
  onNameInputChange: (value: string) => void;
  onNameInputApply: (value: string) => void;
  emailInputValue: string;
  onEmailInputChange: (value: string) => void;
  onEmailInputApply: (value: string) => void;
  phoneInputValue: string;
  onPhoneInputChange: (value: string) => void;
  onPhoneInputApply: (value: string) => void;
  addressInputValue: string;
  onAddressInputChange: (value: string) => void;
  onAddressInputApply: (value: string) => void;
  link1InputValue: string | undefined;
  onLink1InputChange: (value: string) => void;
  onLink1InputApply: (value: string) => void;
  link2InputValue: string | undefined;
  onLink2InputChange: (value: string) => void;
  onLink2InputApply: (value: string) => void;
}

export function EditSectionHeaderDialog({
  isOpen,
  onConfirm,
  nameInputValue,
  onNameInputChange,
  onNameInputApply,
  emailInputValue,
  onEmailInputChange,
  onEmailInputApply,
  phoneInputValue,
  onPhoneInputChange,
  onPhoneInputApply,
  addressInputValue,
  onAddressInputChange,
  onAddressInputApply,
  link1InputValue,
  onLink1InputChange,
  onLink1InputApply,
  link2InputValue,
  onLink2InputChange,
  onLink2InputApply,
}: EditSectionHeaderDialogProps) {
  return (
    <EditDialog isOpen={isOpen} heading="Edit Section" onConfirm={onConfirm}>
      <div className="flex flex-col gap-2 py-2 text-left">
        <TextInput
          label="Name"
          value={nameInputValue}
          onValueChange={onNameInputChange}
          onValueApply={onNameInputApply}
        />
      </div>
      <div className="flex flex-col gap-2 py-2 text-left">
        <TextInput
          label="Email"
          value={emailInputValue}
          onValueChange={onEmailInputChange}
          onValueApply={onEmailInputApply}
        />
        <TextInput
          label="Phone"
          value={phoneInputValue}
          onValueChange={onPhoneInputChange}
          onValueApply={onPhoneInputApply}
        />
        <TextInput
          label="Address"
          value={addressInputValue}
          onValueChange={onAddressInputChange}
          onValueApply={onAddressInputApply}
        />
      </div>
      <div className="flex flex-col gap-2 py-2 text-left">
        <TextInput
          label="Link 1"
          value={link1InputValue}
          onValueChange={onLink1InputChange}
          onValueApply={onLink1InputApply}
        />
        <TextInput
          label="Link 2"
          value={link2InputValue}
          onValueChange={onLink2InputChange}
          onValueApply={onLink2InputApply}
        />
      </div>
    </EditDialog>
  );
}
