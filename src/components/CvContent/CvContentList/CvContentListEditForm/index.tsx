import { TextInput } from "@/components/UI/TextInput";

export interface CvContentListEditFormProps {
  headingInputValue: string;
  onHeadingInputChange: (value: string) => void;
}

export function CvContentListEditForm({
  headingInputValue,
  onHeadingInputChange,
}: CvContentListEditFormProps) {
  return (
    <>
      <div className="flex flex-col gap-2 py-2 text-left">
        <TextInput
          label="Heading"
          value={headingInputValue}
          onValueChange={onHeadingInputChange}
        />
      </div>
    </>
  );
}
