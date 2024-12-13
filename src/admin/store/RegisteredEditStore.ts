import type {
  RegisterCatalog,
  RegisterCategory,
  RegisterProd,
} from "@/types.ts";
import { create } from "zustand/react";

type ProdEditState = {
  editProd: RegisterProd | null;
  setEditProd: (value: RegisterProd) => void;
  resetEditProd: () => void;
};

export const useEditProductStore = create<ProdEditState>((set) => ({
  editProd: null,
  setEditProd: (value) => set({ editProd: value }),
  resetEditProd: () => set({ editProd: null }),
}));

type CategoryEditState = {
  editCategory: RegisterCategory | null;
  setEditCategory: (value: RegisterCategory) => void;
  resetEditCategory: () => void;
};

export const useEditCategoryStore = create<CategoryEditState>((set) => ({
  editCategory: null,
  setEditCategory: (value) => set({ editCategory: value }),
  resetEditCategory: () => set({ editCategory: null }),
}));

type CatalogEditState = {
  editCatalog: RegisterCatalog | null;
  setEditCatalog: (value: RegisterCatalog) => void;
  resetEditCatalog: () => void;
};

export const useEditCatalogStore = create<CatalogEditState>((set) => ({
  editCatalog: null,
  setEditCatalog: (value) => set({ editCatalog: value }),
  resetEditCatalog: () => set({ editCatalog: null }),
}));
