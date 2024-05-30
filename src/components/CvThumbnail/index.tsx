import { getTruncatedString } from "@/utils/getTruncateString";
import { ButtonLight } from "../UI/ButtonLight";
import { Capsule } from "../UI/Capsule";
import { H2 } from "../UI/H2";
import { DeleteIcon } from "../UI/Icons/DeleteIcon";
import { DocumentMagnifyingGlassIcon } from "../UI/Icons/DocumentMagnifyingGlassIcon";
import { DocumentTextIcon } from "../UI/Icons/DocumentTextIcon";
import { EditIcon } from "../UI/Icons/EditIcon";

export interface CvThumbnailProps {
  name: string;
  onEditClick: () => void;
  onEnterClick: () => void;
  onDeleteClick: () => void;
}

export function CvThumbnail({
  name,
  onEditClick,
  onEnterClick,
  onDeleteClick,
}: CvThumbnailProps) {
  return (
    <Capsule className="dark:bg-gray-50 dark:text-gray-800">
      <div className="flex flex-row gap-6 items-center px-2 py-1">
        <div className="flex flex-row gap-2">
          <DocumentTextIcon />
          <H2 className="min-w-52">{getTruncatedString(name, 18)}</H2>
        </div>
        <div className="flex flex-row gap-3 justify-end">
          <ButtonLight onClick={onEditClick}>
            <DocumentMagnifyingGlassIcon />
          </ButtonLight>
          <ButtonLight onClick={onEnterClick}>
            <EditIcon />
          </ButtonLight>
          <ButtonLight onClick={onDeleteClick}>
            <DeleteIcon />
          </ButtonLight>
        </div>
      </div>
    </Capsule>
  );
}
