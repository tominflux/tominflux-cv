import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type UiState = {
  deleteCvDialog: string | undefined;
  openDeleteCvDialog: (id: string) => void;
  closeDeleteCvDialog: () => void;
  isEditMetaDataDialogOpen: boolean;
  openEditMetaDataDialog: () => void;
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
        deleteCvDialog: undefined,
        openDeleteCvDialog: (id) => set(() => ({ deleteCvDialog: id })),
        closeDeleteCvDialog: () => set(() => ({ deleteCvDialog: undefined })),
        isEditMetaDataDialogOpen: false,
        openEditMetaDataDialog: () =>
          set(() => ({ isEditMetaDataDialogOpen: true })),
        closeEditMetaDataDialog: () =>
          set(() => ({ isEditMetaDataDialogOpen: false })),
        isEditLayoutDialogOpen: false,
        openEditLayoutDialog: () =>
          set(() => ({ isEditLayoutDialogOpen: true })),
        closeEditLayoutDialog: () =>
          set(() => ({ isEditLayoutDialogOpen: false })),
        editSectionDialog: undefined,
        editContentDialog: undefined,
        openSectionDialog: (id) =>
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
        openDeleteSectionDialog: (id) =>
          set(() => ({ deleteSectionDialog: id })),
        closeDeleteSectionDialog: () =>
          set(() => ({ deleteSectionDialog: undefined })),
        openContentDialog: (id) =>
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
