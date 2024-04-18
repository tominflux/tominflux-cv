import { CvContentList, CvContentListProps } from "./CvContentList";

export type CvContentProps = { type: "list" } & CvContentListProps;

export function CvContent(props: CvContentProps) {
  switch (props.type) {
    case "list": {
      const { type, ...cvContentListProps } = props;
      return <CvContentList {...cvContentListProps} />;
    }
    default:
      return <></>;
  }
}
