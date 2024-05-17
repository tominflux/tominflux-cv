import { CvContentList } from "@/components/CvContent/CvContentList";
import { CvDocumentContent } from "@/types/CvDocument/CvDocumentContent";

export type CvContentContainerProps = CvDocumentContent;

export function CvContentContainer(props: CvContentContainerProps) {
  switch (props.type) {
    case "list":
      return <CvContentList {...props} />;
    default:
      return <></>;
  }
}
