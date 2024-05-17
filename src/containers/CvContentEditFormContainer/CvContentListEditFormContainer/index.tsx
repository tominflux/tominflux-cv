import { CvContentListEditForm } from "@/components/CvContent/CvContentList/CvContentListEditForm";
import { CvDocumentContentList } from "@/types/CvDocument/CvDocumentContent";

export type CvContentListEditData = Omit<CvDocumentContentList, "id" | "type">;

export interface CvContentListEditFormContainerProps {
  content: CvDocumentContentList;
  onUpdate: (data: CvDocumentContentList) => void;
}

export function CvContentListEditFormContainer({
  content: editData,
  onUpdate: onUpdate,
}: CvContentListEditFormContainerProps) {
  return (
    <CvContentListEditForm
      headingInputValue={editData.heading ?? ""}
      onHeadingInputChange={(value) =>
        onUpdate({ ...editData, heading: value })
      }
    />
  );
}
