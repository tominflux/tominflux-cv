import { ListType } from "@/types/ListType";
import { ReactNode } from "react";

export interface CvListProps {
  type?: ListType;
  heading?: ReactNode;
  items: ReactNode[];
}

export function CvList({ type = "list-disc", heading, items }: CvListProps) {
  return (
    <div className={`mb-3`}>
      {heading ? <h3 className="text-xl mb-1">{heading}</h3> : undefined}
      <ul className={`${type} pl-6`}>
        {items.map((item) => (
          <li className="pl-1">{item}</li>
        ))}
      </ul>
    </div>
  );
}
