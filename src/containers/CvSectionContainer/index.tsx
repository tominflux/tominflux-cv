import {
  CvSectionHeaderContainer,
  CvSectionHeaderContainerProps,
} from "./CvSectionHeaderContainer";
import {
  CvSectionStandardContainer,
  CvSectionStandardContainerProps,
} from "./CvSectionStandardContainer";

export type CvSectionContainerProps =
  | CvSectionHeaderContainerProps
  | CvSectionStandardContainerProps;

export function CvSectionContainer(props: CvSectionContainerProps) {
  switch (props.type) {
    case "header": {
      return <CvSectionHeaderContainer {...props} />;
    }
    case "standard": {
      return <CvSectionStandardContainer {...props} />;
    }
    default:
      return <></>;
  }
}
