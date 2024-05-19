import { ArrangeableList } from "@/components/UI/ArrangeableList";
import { EditDialog } from "@/components/UI/EditDialog";
import { TextInput } from "@/components/UI/TextInput";
import {
  EditContentListOrderCapsule,
  EditContentListOrderCapsuleProps,
} from "./EditContentListOrderCapsule";

export interface EditContentListDialogProps {
  isOpen: boolean;
  headingInputValue: string;
  onHeadingInputChange: (value: string) => void;
  items: ({
    id: string;
    className?: string;
  } & EditContentListOrderCapsuleProps)[];
  itemOrder: string[];
  onItemOrderChange: (itemOrder: string[]) => void;
  onConfirm: () => void;
}

export function EditContentListDialog({
  isOpen,
  headingInputValue,
  onHeadingInputChange,
  items,
  itemOrder,
  onItemOrderChange,
  onConfirm,
}: EditContentListDialogProps) {
  return (
    <EditDialog
      isOpen={isOpen}
      heading="Edit Content"
      subheading="List"
      onConfirm={onConfirm}
    >
      <div className="flex flex-col gap-2 py-2 text-left">
        <TextInput
          label="Heading"
          value={headingInputValue}
          onValueChange={onHeadingInputChange}
        />
      </div>
      <div className="flex flex-col gap-2 py-2 text-left">
        <ArrangeableList
          items={items.map(({ id, className, ...props }) => ({
            id,
            className,
            content: <EditContentListOrderCapsule {...props} />,
          }))}
          itemOrder={itemOrder}
          onItemOrderChange={onItemOrderChange}
        />
      </div>
    </EditDialog>
  );
}
