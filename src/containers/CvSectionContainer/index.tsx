import {
  CvSectionHeaderContainer,
  CvSectionHeaderContainerProps,
} from "./CvSectionHeaderContainer";
import {
  CvSectionStandardContainer,
  CvSectionStandardContainerProps,
} from "./CvSectionStandardContainer";

export type CvSectionContainerProps =
  | ({ type: "header" } & CvSectionHeaderContainerProps)
  | ({ type: "standard" } & CvSectionStandardContainerProps);

export function CvSectionContainer(props: CvSectionContainerProps) {
  switch (props.type) {
    case "header": {
      const { type, ...sectionProps } = props;
      return <CvSectionHeaderContainer {...sectionProps} />;
    }
    case "standard": {
      const { type, ...sectionProps } = props;
      return <CvSectionStandardContainer {...sectionProps} />;
    }
    default:
      return <></>;
  }
}
