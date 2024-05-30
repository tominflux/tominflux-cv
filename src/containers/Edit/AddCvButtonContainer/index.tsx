import { Button } from "@/components/UI/Button";
import { DocumentPlusIcon } from "@/components/UI/Icons/DocumentPlusIcon";

export interface AddCvButtonContainerProps {
  onAddCv: () => void;
}

export function AddCvButtonContainer({ onAddCv }: AddCvButtonContainerProps) {
  const addCv = async () => {
    await fetch(`/api/cv`, { method: "POST" });
    onAddCv();
  };

  const onClick = () => {
    addCv().catch((e) => {
      console.error(e);
    });
  };

  return (
    <div className="py-4 w-full flex flex-row gap-4 justify-center items-center">
      <Button onClick={onClick}>
        <div className="flex flex-row gap-2 items-center">
          <DocumentPlusIcon />
          <span>Add New CV</span>
        </div>
      </Button>
    </div>
  );
}
