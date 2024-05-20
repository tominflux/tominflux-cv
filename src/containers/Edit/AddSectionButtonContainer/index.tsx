import { AddSectionButton } from "@/components/Edit/AddSectionButton";
import { useUiStore } from "@/state/UiStore";

export function AddSectionButtonContainer() {
  const { openAddSectionDialog } = useUiStore();

  const onClick = () => {
    openAddSectionDialog();
  };

  return <AddSectionButton onClick={onClick} />;
}
