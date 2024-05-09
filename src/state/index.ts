import { CvDocument } from "@/types/CvDocument";
import { CvDocumentSection } from "@/types/CvDocument/CvDocumentSection";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type CvState = {
  cv: CvDocument | undefined;
  loadCv: (cv: CvDocument) => void;
  updateSection: (section: CvDocumentSection) => void;
};

export const useCvStore = create<CvState>()(
  devtools(
    persist(
      (set) => ({
        cv: undefined,
        loadCv: (cv) => set(() => ({ cv })),
        updateSection: (section) =>
          set((state) => {
            if (!state.cv) return {};
            const { cv } = state;
            const { sections } = cv;
            const sectionIndex = sections.findIndex(
              (searchSection) => searchSection.id === section.id
            );
            if (sectionIndex === -1) return {};
            const nextSections = [
              ...sections.slice(0, sectionIndex),
              section,
              ...sections.slice(sectionIndex + 1),
            ];
            const nextCv = { ...cv, sections: nextSections };
            return {
              cv: nextCv,
            };
          }),
      }),
      {
        name: "cv-storage",
      }
    )
  )
);
