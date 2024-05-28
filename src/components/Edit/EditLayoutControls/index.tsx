import { AddSectionButton } from "./AddSectionButton";
import { EditLayoutButton } from "./EditLayoutButton";

export interface EditLayoutControlsProps {
  onEditLayout: () => void;
  onAddSection: () => void;
}

export function EditLayoutControls({
  onEditLayout,
  onAddSection,
}: EditLayoutControlsProps) {
  return (
    <div className="py-4 w-full flex flex-row gap-4 justify-center items-center">
      <EditLayoutButton onClick={onEditLayout} />
      <AddSectionButton onClick={onAddSection} />
    </div>
  );
}
