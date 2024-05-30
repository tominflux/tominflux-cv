import { CvThumbnail } from "@/components/CvThumbnail";
import { useCvMetaDataStore } from "@/state/CvMetaDataStore";
import { useUiStore } from "@/state/UiStore";
import { useRouter } from "next/navigation";

export interface CvThumbnailContainerProps {
  id: string;
}

export function CvThumbnailContainer({ id }: CvThumbnailContainerProps) {
  const { cvMetaDatas } = useCvMetaDataStore();
  const { openDeleteCvDialog } = useUiStore();
  const router = useRouter();

  const cvMetaData = cvMetaDatas.find((cvMetaData) => cvMetaData.id === id);

  if (!cvMetaData) return <></>;
  return (
    <CvThumbnail
      name={cvMetaData.metadata.name}
      onPreviewClick={() => {}}
      onEditClick={() => router.push(`/cv/${id}`)}
      onDeleteClick={() => openDeleteCvDialog(id)}
    />
  );
}
