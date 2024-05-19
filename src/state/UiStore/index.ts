import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type UiState = {
  editSectionDialog: string | undefined;
  openSectionDialog: (id: string) => void;
  closeSectionDialog: () => void;
  editContentDialog: string | undefined;
  openContentDialog: (id: string) => void;
  closeContentDialog: () => void;
};

export const useUiStore = create<UiState>()(
  devtools(
    persist(
      (set) => ({
        editSectionDialog: undefined,
        editContentDialog: undefined,
        openSectionDialog: (id: string) =>
          set((state) => ({
            ...state,
            editSectionDialog: id,
          })),
        closeSectionDialog: () =>
          set((state) => ({
            ...state,
            editSectionDialog: undefined,
          })),
        openContentDialog: (id: string) =>
          set((state) => ({
            ...state,
            editContentDialog: id,
          })),
        closeContentDialog: () =>
          set((state) => ({
            ...state,
            editContentDialog: undefined,
          })),
      }),
      {
        name: "ui-storage",
      }
    )
  )
);
