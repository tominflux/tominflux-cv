import { ListType } from "@/types/ListType";
import { ReactNode } from "react";

export interface CvContentListProps {
  listType?: ListType;
  heading?: ReactNode;
  subheading1?: string;
  subheading2?: string;
  items: {
    id: string;
    value: ReactNode;
  }[];
  padding?: boolean;
}

export function CvContentList({
  listType = "list-disc",
  heading,
  subheading1,
  subheading2,
  items,
}: CvContentListProps) {
  return (
    <div className={`mb-5`}>
      {heading ? (
        <div className="grid grid-cols-4">
          <div>
            <h3 className="text-xl font-medium text-left">{heading}</h3>
          </div>
          <div className="col-span-2">
            {subheading1 ? (
              <h4 className="text-xl font-medium text-center">{subheading1}</h4>
            ) : undefined}
          </div>
          <div>
            {subheading2 ? (
              <h4 className="text-xl font-medium text-right">{subheading2}</h4>
            ) : undefined}
          </div>
        </div>
      ) : undefined}
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
