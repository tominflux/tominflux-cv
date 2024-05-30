import { CvDocument } from "@/types/CvDocument";
import { CvDocumentContent } from "@/types/CvDocument/CvDocumentContent";
import { CvDocumentMetaData } from "@/types/CvDocument/CvDocumentMetaData";
import { CvDocumentSection } from "@/types/CvDocument/CvDocumentSection";
import { removeIdElement } from "@/utils/removeIdElement";
import { replaceIdElement } from "@/utils/replaceIdElement";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type CvState = {
  cv: CvDocument | undefined;
  loadCv: (cv: CvDocument) => void;
  updateMetaData: (metadata: CvDocumentMetaData) => void;
  addSection: (section: CvDocumentSection) => void;
  updateSection: (section: CvDocumentSection) => void;
  updateSectionsOrder: (sectionsOrder: string[]) => void;
  deleteSection: (sectionId: string) => void;
  updateContent: (sectionId: string, content: CvDocumentContent) => void;
};

export const useCvStore = create<CvState>()(
  devtools(
    persist(
      (set) => ({
        cv: undefined,
        loadCv: (cv) => set(() => ({ cv })),
        updateMetaData: (metadata) =>
          set((state) => {
            if (!state.cv) return {};
            const { cv } = state;
            const nextCv = {
              ...cv,
              metadata,
            };
            return {
              cv: nextCv,
            };
          }),
        addSection: (section) =>
          set((state) => {
            if (!state.cv) return {};
            const { cv } = state;
            const { sections } = cv;
            const nextSections = [...sections, section];
            const nextCv = {
              ...cv,
              sections: nextSections,
            };
            return {
              cv: nextCv,
            };
          }),
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
        updateSectionsOrder: (sectionsOrder) =>
          set((state) => {
            if (!state.cv) return {};
            const { cv } = state;
            const { sections } = cv;
            const nextSections = sectionsOrder.map(
              (id) =>
                sections.find(
                  (section) => section.id === id
                ) as CvDocumentSection
            );
            const nextCv = { ...cv, sections: nextSections };
            return {
              cv: nextCv,
            };
          }),
        deleteSection: (sectionId) =>
          set((state) => {
            if (!state.cv) return {};
            const { cv } = state;
            const { sections } = cv;
            const nextSections = removeIdElement(sections, sectionId);
            console.log("DEBUG", { sectionId, sections, nextSections });
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
