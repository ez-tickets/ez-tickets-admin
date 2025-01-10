import type { EditProduct, ReNameCategory } from "@/types.ts";
import { create } from "zustand/react";

type CategoryEditState = {
  editCategory: ReNameCategory | null;
  setEditCategory: (value: ReNameCategory) => void;
  resetEditCategory: () => void;
};

export const useEditCategoryStore = create<CategoryEditState>((set) => ({
  editCategory: null,
  setEditCategory: (value) => set({ editCategory: value }),
  resetEditCategory: () => set({ editCategory: null }),
}));

type CatalogEditState = {
  editCatalog: EditProduct | null;
  setEditCatalog: (value: EditProduct) => void;
  resetEditCatalog: () => void;
};

export const useEditCatalogStore = create<CatalogEditState>((set) => ({
  editCatalog: null,
  setEditCatalog: (value) => set({ editCatalog: value }),
  resetEditCatalog: () => set({ editCatalog: null }),
}));
