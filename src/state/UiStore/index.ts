import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type UiState = {
  editMetaDataDialog: string | undefined;
  openEditMetaDataDialog: (id: string) => void;
  closeEditMetaDataDialog: () => void;
  isEditLayoutDialogOpen: boolean;
  openEditLayoutDialog: () => void;
  closeEditLayoutDialog: () => void;
  editSectionDialog: string | undefined;
  openSectionDialog: (id: string) => void;
  closeSectionDialog: () => void;
  isAddSectionDialogOpen: boolean;
  openAddSectionDialog: () => void;
  closeAddSectionDialog: () => void;
  deleteSectionDialog: string | undefined;
  openDeleteSectionDialog: (id: string) => void;
  closeDeleteSectionDialog: () => void;
  editContentDialog: string | undefined;
  openContentDialog: (id: string) => void;
  closeContentDialog: () => void;
};

export const useUiStore = create<UiState>()(
  devtools(
    persist(
      (set) => ({
        editMetaDataDialog: undefined,
        openEditMetaDataDialog: (id) => set(() => ({ editMetaDataDialog: id })),
        closeEditMetaDataDialog: () =>
          set(() => ({ editMetaDataDialog: undefined })),
        isEditLayoutDialogOpen: false,
        openEditLayoutDialog: () =>
          set(() => ({ isEditLayoutDialogOpen: true })),
        closeEditLayoutDialog: () =>
          set(() => ({ isEditLayoutDialogOpen: false })),
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
        deleteSectionDialog: undefined,
        openDeleteSectionDialog: (id: string) =>
          set(() => ({ deleteSectionDialog: id })),
        closeDeleteSectionDialog: () =>
          set(() => ({ deleteSectionDialog: undefined })),
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
