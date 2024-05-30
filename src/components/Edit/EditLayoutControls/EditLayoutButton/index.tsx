import { Button } from "@/components/UI/Button";
import { EditIcon } from "@/components/UI/Icons/EditIcon";

export interface EditLayoutButtonProps {
  onClick: () => void;
}

export function EditLayoutButton({ onClick }: EditLayoutButtonProps) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Button onClick={onClick}>
        <div className="flex flex-row gap-2 items-center">
          <EditIcon />
          <span>Edit Layout</span>
        </div>
      </Button>
    </div>
  );
}
