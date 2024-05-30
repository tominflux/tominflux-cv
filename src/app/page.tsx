"use client";
import { CvThumbnailContainer } from "@/containers/CvThumbnailContrainer";
import { useCvMetaDataStore } from "@/state/CvMetaDataStore";
import { CvMetaDataDocument } from "@/types/CvMetaDataDocument";
import { fetcher } from "@/utils/fetcher";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function Home() {
  const { data, error, isLoading } = useSWR<{
    payload: CvMetaDataDocument[];
    message: string;
  }>(`/api/cv-meta-data`, fetcher);
  const fetchedCvMetaDatas = data?.payload;

  const { cvMetaDatas, loadCvMetaDatas } = useCvMetaDataStore();

  const [didLoadCvMetaDatas, setDidLoadCvMetaDatas] = useState<boolean>(false);

  useEffect(() => {
    if (didLoadCvMetaDatas) return;
    if (!fetchedCvMetaDatas) return;
    setDidLoadCvMetaDatas(true);
    loadCvMetaDatas(fetchedCvMetaDatas);
  }, [didLoadCvMetaDatas, fetchedCvMetaDatas, loadCvMetaDatas]);

  return (
    <main className="flex min-h-screen flex-col gap-2 items-center justify-start p-24 divide-y divide-solid max-w-5xl ml-auto mr-auto">
      {cvMetaDatas.map((cvMetaData) => (
        <CvThumbnailContainer key={cvMetaData.id} id={cvMetaData.id} />
      ))}
    </main>
  );
}
