import { ReactNode } from "react";

export interface CvSectionStandardProps {
  heading?: ReactNode;
  children: ReactNode;
}

export function CvSectionStandard({
  heading,
  children,
}: CvSectionStandardProps) {
  return (
    <div className={`w-full py-3`}>
      {heading ? <h3 className="text-2xl mb-2">{heading}</h3> : undefined}
      <div className={`px-3`}>{children}</div>
    </div>
  );
}
