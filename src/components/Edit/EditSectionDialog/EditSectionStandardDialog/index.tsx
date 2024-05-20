import { ArrangeableList } from "@/components/UI/ArrangeableList";
import { EditDialog } from "@/components/UI/EditDialog";
import { TextInput } from "@/components/UI/TextInput";
import {
  EditContentOrderCapsule,
  EditContentOrderCapsuleProps,
} from "../../EditContentOrderCapsule";
import ConfirmationDialog, {
  ConfirmationDialogProps,
} from "@/components/UI/ConfirmationDialog";
import {
  AddContentDialog,
  AddContentDialogProps,
} from "../../AddContentDialog";
import { ButtonLight } from "@/components/UI/ButtonLight";
import { PlusCircleIcon } from "@/components/UI/Icons/PlusCircleIcon";

export interface EditSectionStandardDialogProps {
  isOpen: boolean;
  headingInputValue: string;
  onHeadingInputChange?: (value: string) => void;
  onHeadingInputApply?: (value: string) => void;
  content: ({
    id: string;
    className?: string;
  } & EditContentOrderCapsuleProps)[];
  contentOrder: string[];
  onContentOrderChange: (contentOrder: string[]) => void;
  onConfirm: () => void;
  deleteContentDialog?: ConfirmationDialogProps;
  addContentDialog?: AddContentDialogProps;
  onAddContent?: () => void;
}

export function EditSectionStandardDialog({
  isOpen,
  headingInputValue,
  onHeadingInputChange,
  onHeadingInputApply,
  content,
  contentOrder,
  onContentOrderChange,
  onConfirm,
  deleteContentDialog,
  addContentDialog,
  onAddContent,
}: EditSectionStandardDialogProps) {
  return (
    <>
      <EditDialog isOpen={isOpen} heading="Edit Section" onConfirm={onConfirm}>
        <div className="flex flex-col gap-2 py-2 text-left">
          <TextInput
            label="Title"
            value={headingInputValue}
            onValueChange={onHeadingInputChange}
            onValueApply={onHeadingInputApply}
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
              content: <EditContentOrderCapsule {...props} />,
            }))}
            itemOrder={contentOrder}
            onItemOrderChange={onContentOrderChange}
          />
          <ButtonLight
            onClick={onAddContent ? () => onAddContent() : undefined}
          >
            <div className="flex flow-row gap-2 items-center justify-center">
              <PlusCircleIcon />
              <span>Add Content</span>
            </div>
          </ButtonLight>
        </div>
      </EditDialog>
      {deleteContentDialog ? (
        <ConfirmationDialog {...deleteContentDialog} />
      ) : undefined}
      {addContentDialog ? (
        <AddContentDialog {...addContentDialog} />
      ) : undefined}
    </>
  );
}
