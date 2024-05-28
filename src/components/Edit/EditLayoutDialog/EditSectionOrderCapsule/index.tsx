import { ButtonLight } from "@/components/UI/ButtonLight";
import { DeleteIcon } from "@/components/UI/Icons/DeleteIcon";
import { EditIcon } from "@/components/UI/Icons/EditIcon";
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
  const getTruncatedLabel = (label: string) => {
    if (label.length <= maxLabelLength) return label;
    return `${label.slice(0, maxLabelLength)}...`;
  };

  return (
    <div className="flex flex-row gap-4 items-center justify-between pointer-events-none">
      <div className="flex flex-row gap-2 justify-end">
        <div>{icon}</div>
        <div>{getTruncatedLabel(label)}</div>
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
