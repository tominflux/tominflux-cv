import { CvMetaDataDocument } from "@/types/CvMetaDataDocument";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type CvMetaDataState = {
  cvMetaDatas: CvMetaDataDocument[];
  loadCvMetaDatas: (cvMetaDatas: CvMetaDataDocument[]) => void;
};

export const useCvMetaDataStore = create<CvMetaDataState>()(
  devtools(
    persist(
      (set) => ({
        cvMetaDatas: [],
        loadCvMetaDatas: (cvMetaDatas) => set(() => ({ cvMetaDatas })),
      }),
      {
        name: "cv-meta-data-storage",
      }
    )
  )
);
