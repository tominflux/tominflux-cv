"use client";
import { CvSectionHeaderEditModal } from "@/components/CvSection/CvSectionHeader/CvSectionHeaderEditModal";
import { Modal } from "@/components/UI/Modal";
import { CvContainer } from "@/containers/CvContainer";
import { useCvStore } from "@/state";
import { useParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (input: string | URL | Request, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

export default function CvPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR(`/api/cv/${id}`, fetcher);

  console.log("DEBUG", { data, error, isLoading });

  const cvState = data?.payload;

  return (
    <>
      <CvContainer {...cvState} />
    </>
  );
}
