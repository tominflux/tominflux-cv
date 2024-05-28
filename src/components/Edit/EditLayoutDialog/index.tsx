import { EditDialog } from "@/components/UI/EditDialog";
import {
  EditSectionOrderCapsule,
  EditSectionOrderCapsuleProps,
} from "./EditSectionOrderCapsule";
import { ArrangeableList } from "@/components/UI/ArrangeableList";
import { ButtonLight } from "@/components/UI/ButtonLight";
import { PlusCircleIcon } from "@/components/UI/Icons/PlusCircleIcon";
import ConfirmationDialog, {
  ConfirmationDialogProps,
} from "@/components/UI/ConfirmationDialog";

export interface EditLayoutDialogProps {
  isOpen: boolean;
  sections: ({
    id: string;
    className?: string;
  } & EditSectionOrderCapsuleProps)[];
  sectionsOrder: string[];
  onSectionsOrderChange: (sectionsOrder: string[]) => void;
  onAddSection?: () => void;
  onConfirm: () => void;
}

export function EditLayoutDialog({
  isOpen,
  sections,
  sectionsOrder,
  onSectionsOrderChange,
  onAddSection,
  onConfirm,
}: EditLayoutDialogProps) {
  return (
    <EditDialog isOpen={isOpen} heading="Edit CV Layout" onConfirm={onConfirm}>
      <div className="flex flex-col gap-2 py-2 text-left">
        <label className="block text-sm font-medium">Sections</label>
        <ArrangeableList
          items={sections.map(({ id, className, ...props }) => ({
            id,
            className,
            content: <EditSectionOrderCapsule {...props} />,
          }))}
          itemOrder={sectionsOrder}
          onItemOrderChange={onSectionsOrderChange}
        />
        <ButtonLight onClick={onAddSection ? () => onAddSection() : undefined}>
          <div className="flex flow-row gap-2 items-center justify-center">
            <PlusCircleIcon />
            <span>Add Section</span>
          </div>
        </ButtonLight>
      </div>
    </EditDialog>
  );
}
