"use client";
import { CvThumbnailContainer } from "@/containers/CvThumbnailContrainer";
import { AddCvButtonContainer } from "@/containers/Edit/AddCvButtonContainer";
import { DeleteCvDialogContainer } from "@/containers/Edit/DeleteCvDialogContainer";
import { useCvMetaDataStore } from "@/state/CvMetaDataStore";
import { CvMetaDataDocument } from "@/types/CvMetaDataDocument";
import { fetcher } from "@/utils/fetcher";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function Home() {
  const { data, error, isLoading, mutate } = useSWR<{
    payload: CvMetaDataDocument[];
    message: string;
  }>(`/api/cv-meta-data`, fetcher);
  const fetchedCvMetaDatas = data?.payload;

  const { cvMetaDatas, loadCvMetaDatas } = useCvMetaDataStore();

  useEffect(() => {
    if (isLoading) return;
    if (error) return;
    if (!fetchedCvMetaDatas) return;
    loadCvMetaDatas(fetchedCvMetaDatas);
  }, [error, fetchedCvMetaDatas, isLoading, loadCvMetaDatas]);

  return (
    <>
      <main className="flex min-h-screen flex-col gap-2 items-center justify-start p-24  max-w-5xl ml-auto mr-auto">
        {cvMetaDatas.map((cvMetaData) => (
          <CvThumbnailContainer key={cvMetaData.id} id={cvMetaData.id} />
        ))}
        <AddCvButtonContainer
          onAddCv={() => {
            mutate();
          }}
        />
      </main>
      <DeleteCvDialogContainer
        onDeleteCv={() => {
          mutate();
        }}
      />
    </>
  );
}
