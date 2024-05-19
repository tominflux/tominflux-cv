import { CvDocument } from "@/types/CvDocument";
import { CvDocumentContent } from "@/types/CvDocument/CvDocumentContent";
import { CvDocumentSection } from "@/types/CvDocument/CvDocumentSection";
import { replaceIdElement } from "@/utils/replaceIdElement";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type CvState = {
  cv: CvDocument | undefined;
  loadCv: (cv: CvDocument) => void;
  updateSection: (section: CvDocumentSection) => void;
  updateContent: (sectionId: string, content: CvDocumentContent) => void;
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
            const nextSections = replaceIdElement(sections, section);
            const nextCv = { ...cv, sections: nextSections };
            return {
              cv: nextCv,
            };
          }),
        updateContent: (sectionId, content) =>
          set((state) => {
            if (!state.cv) return {};
            const { cv } = state;
            const { sections } = cv;
            const section = sections.find(
              (section) => section.id === sectionId
            );
            if (!section || section.type !== "standard") return {};
            const nextSection = {
              ...section,
              content: replaceIdElement(section.content, content),
            };
            const nextSections = replaceIdElement(sections, nextSection);
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
