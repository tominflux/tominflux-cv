import {
  CvContentList,
  CvContentListProps,
} from "@/components/CvContent/CvContentList";

export type CvContentContainerProps = { type: "list" } & CvContentListProps;

export function CvContentContainer(props: CvContentContainerProps) {
  switch (props.type) {
    case "list": {
      const { type, ...cvContentListProps } = props;
      return <CvContentList {...cvContentListProps} />;
    }
    default:
      return <></>;
  }
}
