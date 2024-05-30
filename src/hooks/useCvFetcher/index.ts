import { useCvStore } from "@/state/CvStore";
import { CvDocument } from "@/types/CvDocument";
import { fetcher } from "@/utils/fetcher";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

export function useCvFetcher() {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useSWR<{
    payload: CvDocument;
    message: string;
  }>(`/api/cv/${id}`, fetcher);
  const fetchedCv = data?.payload;

  const { loadCv } = useCvStore();

  const [loadedCv, setLoadedCv] = useState<string | undefined>(undefined);
  const didLoadCv = loadedCv === id;

  useEffect(() => {
    if (didLoadCv) return;
    if (!fetchedCv) return;
    setLoadedCv(id);
    loadCv(fetchedCv);
  }, [didLoadCv, fetchedCv, id, loadCv]);
}
