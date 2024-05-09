import { useCvStore } from "@/state";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export function useCvUpdater() {
  const { id } = useParams();

  const { cv } = useCvStore();

  useEffect(() => {
    fetch(`/api/cv/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cv),
    });
  }, [cv]);
}
