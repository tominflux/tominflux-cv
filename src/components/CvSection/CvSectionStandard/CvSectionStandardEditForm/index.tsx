import {
  ArrangeableList,
  ArrangeableListItem,
} from "@/components/UI/ArrangeableList";
import { TextInput } from "@/components/UI/TextInput";
import {
  CvSectionStandardContentCapsule,
  CvSectionStandardContentCapsuleProps,
} from "../CvSectionStandardContentCapsule";

export interface CvSectionStandardEditFormProps {
  headingInputValue: string;
  onHeadingInputChange: (value: string) => void;
  content: ({
    id: string;
    className?: string;
  } & CvSectionStandardContentCapsuleProps)[];
}

export function CvSectionStandardEditForm({
  headingInputValue,
  onHeadingInputChange,
  content,
}: CvSectionStandardEditFormProps) {
  return (
    <>
      <div className="flex flex-col gap-2 py-2 text-left">
        <TextInput
          label="Title"
          value={headingInputValue}
          onValueChange={onHeadingInputChange}
        />
      </div>
      <div className="flex flex-col gap-2 py-2 text-left">
        <label htmlFor="url" className="block text-sm font-medium">
          Content
        </label>
        <ArrangeableList
          items={content.map(({ id, className, ...props }) => ({
            id,
            className,
            content: <CvSectionStandardContentCapsule {...props} />,
          }))}
        />
      </div>
    </>
  );
}
