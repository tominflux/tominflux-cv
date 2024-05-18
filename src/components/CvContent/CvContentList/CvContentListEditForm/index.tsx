import {
  ArrangeableList,
  ArrangeableListItem,
} from "@/components/UI/ArrangeableList";
import { TextInput } from "@/components/UI/TextInput";

export interface CvContentListEditFormProps {
  headingInputValue: string;
  onHeadingInputChange: (value: string) => void;
  items: ArrangeableListItem[];
}

export function CvContentListEditForm({
  headingInputValue,
  onHeadingInputChange,
  items,
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
      <div className="flex flex-col gap-2 py-2 text-left">
        <ArrangeableList items={items} />
      </div>
    </>
  );
}
