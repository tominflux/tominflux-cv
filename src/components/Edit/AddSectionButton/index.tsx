import { Button } from "@/components/UI/Button";
import { PlusCircleIcon } from "@/components/UI/Icons/PlusCircleIcon";

export interface AddSectionButtonProps {
  onClick: () => void;
}

export function AddSectionButton({ onClick }: AddSectionButtonProps) {
  return (
    <div className="py-4 w-full flex flex-row  justify-center ">
      <Button onClick={onClick}>
        <div className="flex flow-row gap-2 items-center">
          <PlusCircleIcon />
          <span>Add Section</span>
        </div>
      </Button>
    </div>
  );
}
