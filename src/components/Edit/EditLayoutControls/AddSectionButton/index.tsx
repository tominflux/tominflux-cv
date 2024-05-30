import { Button } from "@/components/UI/Button";
import { PlusCircleIcon } from "@/components/UI/Icons/PlusCircleIcon";

export interface AddSectionButtonProps {
  onClick: () => void;
}

export function AddSectionButton({ onClick }: AddSectionButtonProps) {
  return (
    <Button onClick={onClick}>
      <div className="flex flex-row gap-2 items-center">
        <PlusCircleIcon />
        <span>Add Section</span>
      </div>
    </Button>
  );
}
