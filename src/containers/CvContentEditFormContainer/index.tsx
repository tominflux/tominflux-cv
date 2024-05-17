import { CvDocumentContent } from "@/types/CvDocument/CvDocumentContent";
import { CvContentListEditFormContainer } from "./CvContentListEditFormContainer";

export type CvContentEditFormContainerProps = {
  content: CvDocumentContent;
  onUpdate: (content: CvDocumentContent) => void;
};

export function CvContentEditFormContainer({
  content,
  onUpdate,
}: CvContentEditFormContainerProps) {
  switch (content.type) {
    case "list":
      return (
        <CvContentListEditFormContainer content={content} onUpdate={onUpdate} />
      );
    default:
      return <></>;
  }
}
