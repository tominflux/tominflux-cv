import { EditOverlay } from "@/components/Edit/EditOverlay";
import { ReactNode } from "react";

export interface CvSectionStandardEditData {
  heading: string;
}
export interface CvSectionStandardProps {
  heading: string;
  children: ReactNode;
  onEditButtonClick?: () => void;
}

export function CvSectionStandard({
  heading,
  children,
  onEditButtonClick,
}: CvSectionStandardProps) {
  const containerClassName = "w-full py-3";
  const contents = (
    <>
      {heading ? (
        <h3 className="text-2xl underline mb-5">{heading}</h3>
      ) : undefined}
      <div className={`px-3`}>{children}</div>
    </>
  );
  if (!onEditButtonClick) {
    return <div className={containerClassName}>{contents}</div>;
  }
  return (
    <EditOverlay
      className={containerClassName}
      onEditButtonClick={onEditButtonClick}
    >
      {contents}
    </EditOverlay>
  );
}
