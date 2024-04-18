import { ReactNode } from "react";

export interface CvSectionProps {
  heading?: ReactNode;
  children: ReactNode;
}

export function CvSection({ heading, children }: CvSectionProps) {
  return (
    <div className={`w-full py-3`}>
      {heading ? <h3 className="text-2xl mb-2">{heading}</h3> : undefined}
      <div className={`px-3`}>{children}</div>
    </div>
  );
}
