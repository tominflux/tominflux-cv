import { CvControlBar } from "@/components/CvControlBar";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { useRouter } from "next/navigation";

export function CvControlBarContainer() {
  const { cv } = useCvStore();
  const { openEditMetaDataDialog } = useUiStore();
  const router = useRouter();

  const documentName = cv?.metadata?.name ?? "n/a";

  return (
    <CvControlBar
      documentName={documentName}
      onBackClick={() => router.push(`/`)}
      onEditMetaDataClick={() => {
        console.log("OPEN");
        openEditMetaDataDialog();
      }}
      onViewPreviewClick={() => {}}
    />
  );
}
