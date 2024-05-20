import { ListIcon } from "@/components/UI/Icons/ListIcon";
import { QuestionMarkIcon } from "@/components/UI/Icons/QuestionMarkIcon";
import { CvDocumentContent } from "@/types/CvDocument/CvDocumentContent";

export interface AddContentThumbnailProps {
  type: CvDocumentContent["type"];
}

export function AddContentThumbnail({ type }: AddContentThumbnailProps) {
  const getIcon = () => {
    switch (type) {
      case "list":
        return <ListIcon />;
      case "lorem":
        return <QuestionMarkIcon />;
      default:
        return <></>;
    }
  };

  const getLabel = () => {
    switch (type) {
      case "list":
        return <span>List</span>;
      case "lorem":
        return <span>Lorem</span>;
      default:
        return <></>;
    }
  };

  return (
    <div className="flex flex-col items-center">
      {getIcon()}
      {getLabel()}
    </div>
  );
}
