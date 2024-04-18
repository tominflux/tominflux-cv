import { CvHeading } from "../CvHeading";
import { CvList } from "../CvList";

export interface CvHeaderProps {
  name: string;
  margin?: number;
}

export function CvHeader({ name, margin = 3 }: CvHeaderProps) {
  return (
    <div className={`grid grid-cols-2 gap-4 w-full mb-${margin}`}>
      <div>
        <CvHeading type="h1" size="3xl">
          {name}
        </CvHeading>
      </div>
      <div className="text-right">
        <CvList
          type="none"
          items={["[Email Address]", "[Phone Number]", "[Home Address]"]}
        />
      </div>
    </div>
  );
}
