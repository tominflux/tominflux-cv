import { CvContentList } from "@/components/CvContent/CvContentList";
import { CvDocumentContentList } from "@/types/CvDocument/CvDocumentContent";

export type CvContentListContainerProps = CvDocumentContentList;

export function CvContentListContainer({
  id,
  type,
  heading,
  items,
}: CvContentListContainerProps) {
  return <CvContentList heading={heading} items={items} />;
}
