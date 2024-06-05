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
        <div className="grid grid-cols-4 items-center">
          <div className={subheading1 ? undefined : "col-span-2"}>
            <h3 className="text-xl text-left">{heading}</h3>
          </div>
          {subheading1 ? (
            <div className="col-span-2">
              <h4 className="text-xl font-medium text-center">{subheading1}</h4>
            </div>
          ) : undefined}
          {subheading2 ? (
            <div className={subheading1 ? undefined : "col-span-2"}>
              <h4 className="text-md text-right">{subheading2}</h4>
            </div>
          ) : undefined}
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
