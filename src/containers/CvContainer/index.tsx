"use client";

import { CvLayout } from "@/components/CvLayout";
import { CvSectionContainer } from "../CvSectionContainer";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { useCvStore } from "@/state";
import { CvDocument } from "@/types/CvDocument";
import { useCvFetcher } from "@/hooks/useCvFetcher";
import { useCvUpdater } from "@/hooks/useCvUpdater";

export interface CvContainerProps {}

export function CvContainer({}: CvContainerProps) {
  const { cv } = useCvStore();

  useCvFetcher();
  useCvUpdater();

  console.log("DEBUG", cv);

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
