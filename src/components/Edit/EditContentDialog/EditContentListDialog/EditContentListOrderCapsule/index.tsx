import { ButtonLight } from "@/components/UI/ButtonLight";
import { DeleteIcon } from "@/components/UI/Icons/DeleteIcon";
import { EditIcon } from "@/components/UI/Icons/EditIcon";
import { getTruncatedString } from "@/utils/getTruncateString";

export interface EditContentListOrderCapsuleProps {
  label: string;
  maxLabelLength?: number;
  onEdit: () => void;
  onDelete: () => void;
}

export function EditContentListOrderCapsule({
  label,
  maxLabelLength = 30,
  onEdit,
  onDelete,
}: EditContentListOrderCapsuleProps) {
  return (
    <div className="flex flex-row gap-4 items-center justify-between pointer-events-none">
      <div className="flex flex-row gap-2 justify-end">
        <div>{getTruncatedString(label, maxLabelLength)}</div>
      </div>
      <div className="flex flex-row gap-2 justify-end">
        <ButtonLight onClick={onEdit} className="pointer-events-auto">
          <EditIcon />
        </ButtonLight>
        <ButtonLight onClick={onDelete} className="pointer-events-auto">
          <DeleteIcon />
        </ButtonLight>
      </div>
    </div>
  );
}
