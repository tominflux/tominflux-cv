import { CvContentList } from "@/components/CvContent/CvContentList";
import { CvDocumentContentList } from "@/types/CvDocument/CvDocumentContent";

export type CvContentListContainerProps = CvDocumentContentList;

export function CvContentListContainer({
  id,
  type,
  heading,
  subheading1,
  subheading2,
  items,
}: CvContentListContainerProps) {
  return (
    <CvContentList
      heading={heading}
      items={items}
      subheading1={subheading1}
      subheading2={subheading2}
    />
  );
}
