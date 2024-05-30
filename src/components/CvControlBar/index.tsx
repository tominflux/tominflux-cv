import { ButtonLight } from "../UI/ButtonLight";
import { ControlBar } from "../UI/ControlBar";
import { H2 } from "../UI/H2";
import { DocumentMagnifyingGlassIcon } from "../UI/Icons/DocumentMagnifyingGlassIcon";
import { EditIcon } from "../UI/Icons/EditIcon";
import { GoBackIcon } from "../UI/Icons/GoBackIcon";

export interface CvControlBarProps {
  documentName: string;
  onBackClick: () => void;
  onEditMetaDataClick: () => void;
  onViewPreviewClick: () => void;
}

export function CvControlBar({
  documentName,
  onBackClick,
  onEditMetaDataClick,
  onViewPreviewClick,
}: CvControlBarProps) {
  return (
    <ControlBar>
      <div>
        <ButtonLight onClick={onBackClick}>
          <div className="flex flex-row gap-2 items-center justify-center px-2 py-1">
            <GoBackIcon />
            <span>Back</span>
          </div>
        </ButtonLight>
      </div>
      <div>
        <H2>{documentName}</H2>
      </div>
      <div className="flex flex-row gap-3">
        <ButtonLight onClick={onEditMetaDataClick}>
          <div className="flex flex-row gap-2 items-center justify-center px-2 py-1">
            <EditIcon />
            <span>Edit MetaData</span>
          </div>
        </ButtonLight>
        <ButtonLight onClick={onViewPreviewClick}>
          <div className="flex flex-row gap-2 items-center justify-center px-2 py-1">
            <DocumentMagnifyingGlassIcon />
            <span>View Preview</span>
          </div>
        </ButtonLight>
      </div>
    </ControlBar>
  );
}
