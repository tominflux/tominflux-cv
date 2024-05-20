import { QueueListIcon } from "@/components/UI/Icons/QueueListIcon";
import { RectangleGroupIcon } from "@/components/UI/Icons/RectangleGroupIcon";
import { CvDocumentSection } from "@/types/CvDocument/CvDocumentSection";

export interface AddSectionThumbnailProps {
  type: CvDocumentSection["type"];
}

export function AddSectionThumbnail({ type }: AddSectionThumbnailProps) {
  const getIcon = () => {
    switch (type) {
      case "header":
        return <QueueListIcon />;
      case "standard":
        return <RectangleGroupIcon />;
    }
  };

  const getLabel = () => {
    switch (type) {
      case "header":
        return <span>Header</span>;
      case "standard":
        return <span>Standard</span>;
    }
  };

  return (
    <div className="flex flex-col items-center">
      {getIcon()}
      {getLabel()}
    </div>
  );
}
