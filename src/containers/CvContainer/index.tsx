"use client";

import { CvLayout } from "@/components/CvLayout";
import {
  CvSectionContainer,
  CvSectionContainerProps,
} from "../CvSectionContainer";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { useCvStore } from "@/state";
import { CvDocument } from "@/types/CvDocument";

export interface CvContainerProps {}

const fetcher = (input: string | URL | Request, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

export function CvContainer({}: CvContainerProps) {
  const { id } = useParams();

  const { data, error, isLoading } = useSWR<{
    payload: CvDocument;
    message: string;
  }>(`/api/cv/${id}`, fetcher);
  const fetchedCv = data?.payload;

  const { cv, loadCv } = useCvStore();

  const [didLoadCv, setDidLoadCv] = useState<boolean>(false);
  useEffect(() => {
    if (didLoadCv) return;
    if (!fetchedCv) return;
    setDidLoadCv(true);
    loadCv(fetchedCv);
  }, [didLoadCv, fetchedCv, loadCv]);

  return (
    <CvLayout>
      {cv
        ? cv.sections.map((sectionProps) => (
            <CvSectionContainer {...sectionProps} />
          ))
        : undefined}
    </CvLayout>
  );
}
