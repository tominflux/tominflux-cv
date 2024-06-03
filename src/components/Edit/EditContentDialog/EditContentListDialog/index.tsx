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
  subheading1InputValue: string;
  onSubheading1InputChange?: (value: string) => void;
  onSubheading1InputApply?: (value: string) => void;
  subheading2InputValue: string;
  onSubheading2InputChange?: (value: string) => void;
  onSubheading2InputApply?: (value: string) => void;
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
  subheading1InputValue,
  onSubheading1InputChange,
  onSubheading1InputApply,
  subheading2InputValue,
  onSubheading2InputChange,
  onSubheading2InputApply,
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
          <TextInput
            label="Sub-heading 1"
            value={subheading1InputValue}
            onValueChange={onSubheading1InputChange}
            onValueApply={onSubheading1InputApply}
          />
          <TextInput
            label="Sub-heading 2"
            value={subheading2InputValue}
            onValueChange={onSubheading2InputChange}
            onValueApply={onSubheading2InputApply}
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
            <div className="flex flex-row gap-2 items-center justify-center">
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
