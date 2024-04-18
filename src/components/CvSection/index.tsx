import { CvSectionHeader, CvSectionHeaderProps } from "./CvSectionHeader";
import { CvSectionStandard, CvSectionStandardProps } from "./CvSectionStandard";

export type CvSectionProps =
  | ({ type: "header" } & CvSectionHeaderProps)
  | ({ type: "standard" } & CvSectionStandardProps);

export function CvSection(props: CvSectionProps) {
  switch (props.type) {
    case "header": {
      const { type, ...cvSectionHeaderProps } = props;
      return <CvSectionHeader {...cvSectionHeaderProps} />;
    }
    case "standard": {
      const { type, ...cvSectionStandard } = props;
      return <CvSectionStandard {...cvSectionStandard} />;
    }
    default:
      return <></>;
  }
}
