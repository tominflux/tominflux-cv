import { ArrangeableList } from "@/components/UI/ArrangeableList";
import { EditDialog } from "@/components/UI/EditDialog";
import { TextInput } from "@/components/UI/TextInput";
import {
  EditTextAreaDialog,
  EditTextAreaDialogProps,
} from "../../EditTextAreaDialog";
import {
  EditContentListOrderCapsule,
  EditContentListOrderCapsuleProps,
} from "./EditContentListOrderCapsule";
import ConfirmationDialog, {
  ConfirmationDialogProps,
} from "@/components/UI/ConfirmationDialog";
import { ButtonLight } from "@/components/UI/ButtonLight";
import { PlusCircleIcon } from "@/components/UI/Icons/PlusCircleIcon";

export interface EditContentListDialogProps {
  isOpen: boolean;
  headingInputValue: string;
  onHeadingInputChange?: (value: string) => void;
  onHeadingInputApply?: (value: string) => void;
  items: ({
    id: string;
    className?: string;
  } & EditContentListOrderCapsuleProps)[];
  itemOrder: string[];
  onItemOrderChange: (itemOrder: string[]) => void;
  onConfirm: () => void;
  editItemDialog?: EditTextAreaDialogProps;
  deleteItemDialog?: ConfirmationDialogProps;
  onAddItem?: () => void;
}

export function EditContentListDialog({
  isOpen,
  headingInputValue,
  onHeadingInputChange,
  onHeadingInputApply,
  items,
  itemOrder,
  onItemOrderChange,
  onConfirm,
  editItemDialog,
  deleteItemDialog,
  onAddItem,
}: EditContentListDialogProps) {
  return (
    <>
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
            onValueApply={onHeadingInputApply}
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
          <ButtonLight onClick={onAddItem ? () => onAddItem() : undefined}>
            <div className="flex flow-row gap-2 items-center justify-center">
              <PlusCircleIcon />
              <span>Add Item</span>
            </div>
          </ButtonLight>
        </div>
      </EditDialog>
      {editItemDialog ? <EditTextAreaDialog {...editItemDialog} /> : undefined}
      {deleteItemDialog ? (
        <ConfirmationDialog {...deleteItemDialog} />
      ) : undefined}
    </>
  );
}
