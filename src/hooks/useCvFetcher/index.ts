import { useCvStore } from "@/state";
import { CvDocument } from "@/types/CvDocument";
import { fetcher } from "@/utils/fetcher";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

export function useCvFetcher() {
  const { id } = useParams();

  const { data, error, isLoading } = useSWR<{
    payload: CvDocument;
    message: string;
  }>(`/api/cv/${id}`, fetcher);
  const fetchedCv = data?.payload;

  const { loadCv } = useCvStore();

  const [didLoadCv, setDidLoadCv] = useState<boolean>(false);
  useEffect(() => {
    if (didLoadCv) return;
    if (!fetchedCv) return;
    setDidLoadCv(true);
    loadCv(fetchedCv);
  }, [didLoadCv, fetchedCv, loadCv]);
}
