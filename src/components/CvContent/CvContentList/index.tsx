import { ListType } from "@/types/ListType";
import { ReactNode } from "react";

export interface CvContentListProps {
  listType?: ListType;
  heading?: ReactNode;
  items: {
    id: string;
    value: ReactNode;
  }[];
}

export function CvContentList({
  listType = "list-disc",
  heading,
  items,
}: CvContentListProps) {
  return (
    <div className={`mb-3`}>
      {heading ? <h3 className="text-xl mb-1">{heading}</h3> : undefined}
      <ul className={`${listType} pl-6`}>
        {items.map((item) => (
          <li key={item.id} className="pl-1">
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
