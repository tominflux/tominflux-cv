import { EditOverlay } from "@/components/Edit/EditOverlay";
import { ReactNode } from "react";

export interface CvSectionStandardEditData {
  heading: string;
}
export interface CvSectionStandardProps {
  heading: string;
  children: ReactNode;
  onEditButtonClick: () => void;
}

export function CvSectionStandard({
  heading,
  children,
  onEditButtonClick,
}: CvSectionStandardProps) {
  return (
    <EditOverlay
      className={`w-full py-3`}
      onEditButtonClick={onEditButtonClick}
    >
      {heading ? <h3 className="text-2xl mb-2">{heading}</h3> : undefined}
      <div className={`px-3`}>{children}</div>
    </EditOverlay>
  );
}
