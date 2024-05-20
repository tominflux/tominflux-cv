import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type UiState = {
  editSectionDialog: string | undefined;
  openSectionDialog: (id: string) => void;
  closeSectionDialog: () => void;
  isAddSectionDialogOpen: boolean;
  openAddSectionDialog: () => void;
  closeAddSectionDialog: () => void;
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
          set(() => ({
            editSectionDialog: id,
          })),
        closeSectionDialog: () =>
          set(() => ({
            editSectionDialog: undefined,
          })),
        isAddSectionDialogOpen: false,
        openAddSectionDialog: () =>
          set(() => ({ isAddSectionDialogOpen: true })),
        closeAddSectionDialog: () =>
          set(() => ({ isAddSectionDialogOpen: false })),
        openContentDialog: (id: string) =>
          set(() => ({
            editContentDialog: id,
          })),
        closeContentDialog: () =>
          set(() => ({
            editContentDialog: undefined,
          })),
      }),
      {
        name: "ui-storage",
      }
    )
  )
);
