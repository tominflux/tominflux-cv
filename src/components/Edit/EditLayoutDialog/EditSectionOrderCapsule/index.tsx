import { ButtonLight } from "@/components/UI/ButtonLight";
import { DeleteIcon } from "@/components/UI/Icons/DeleteIcon";
import { EditIcon } from "@/components/UI/Icons/EditIcon";
import { getTruncatedString } from "@/utils/getTruncateString";
import { ReactNode } from "react";

export interface EditSectionOrderCapsuleProps {
  transparent?: boolean;
  icon: ReactNode;
  label: string;
  maxLabelLength?: number;
  onEdit: () => void;
  onDelete: () => void;
}

export function EditSectionOrderCapsule({
  icon,
  label,
  maxLabelLength = 24,
  onEdit,
  onDelete,
}: EditSectionOrderCapsuleProps) {
  return (
    <div className="flex flex-row gap-4 items-center justify-between pointer-events-none">
      <div className="flex flex-row gap-2 justify-end">
        <div>{icon}</div>
        <div>{getTruncatedString(label, maxLabelLength)}</div>
      </div>
      <div className="flex flex-row gap-2 justify-end">
        <ButtonLight className="pointer-events-auto" onClick={onEdit}>
          <EditIcon />
        </ButtonLight>
        <ButtonLight className="pointer-events-auto" onClick={onDelete}>
          <DeleteIcon />
        </ButtonLight>
      </div>
    </div>
  );
}
