import { ButtonLight } from "@/components/UI/ButtonLight";
import { DeleteIcon } from "@/components/UI/Icons/DeleteIcon";
import { EditIcon } from "@/components/UI/Icons/EditIcon";

export interface EditContentListOrderCapsuleProps {
  label: string;
  maxLabelLength?: number;
  onEdit: () => void;
  onDelete: () => void;
}

export function EditContentListOrderCapsule({
  label,
  maxLabelLength = 60,
  onEdit,
  onDelete,
}: EditContentListOrderCapsuleProps) {
  const getTruncatedLabel = (label: string) => {
    if (label.length <= maxLabelLength) return label;
    return `${label.slice(0, maxLabelLength)}...`;
  };

  return (
    <div className="flex flex-row gap-4 items-center justify-between">
      <div className="flex flex-row gap-2 justify-end">
        <div>{getTruncatedLabel(label)}</div>
      </div>
      <div className="flex flex-row gap-2 justify-end">
        <ButtonLight onClick={onEdit}>
          <EditIcon />
        </ButtonLight>
        <ButtonLight onClick={onDelete}>
          <DeleteIcon />
        </ButtonLight>
      </div>
    </div>
  );
}
