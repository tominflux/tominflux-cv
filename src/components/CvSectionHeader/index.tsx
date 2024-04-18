import { CvList } from "../CvList";

export interface CvSectionHeaderProps {
  name: string;
}

export function CvSectionHeader({ name }: CvSectionHeaderProps) {
  return (
    <div className={`grid grid-cols-2 gap-4 w-full py-3`}>
      <div>
        <h1 className="text-3xl">{name}</h1>
      </div>
      <div className="text-right">
        <CvList
          type="list-none"
          items={["[Email Address]", "[Phone Number]", "[Home Address]"]}
        />
      </div>
    </div>
  );
}
