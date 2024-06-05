import { CvControlBar } from "@/components/CvControlBar";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { useRouter } from "next/navigation";

export function CvControlBarContainer() {
  const { cv } = useCvStore();
  const { openEditMetaDataDialog } = useUiStore();
  const router = useRouter();

  const documentName = cv?.metadata?.name ?? "n/a";
  const previewUrl = cv ? `/cv/${cv.id}/preview` : undefined;

  return (
    <CvControlBar
      documentName={documentName}
      onBackClick={() => router.push(`/`)}
      onEditMetaDataClick={() => {
        openEditMetaDataDialog();
      }}
      onViewPreviewClick={
        previewUrl ? () => window.open(previewUrl, "_blank") : () => {}
      }
    />
  );
}
