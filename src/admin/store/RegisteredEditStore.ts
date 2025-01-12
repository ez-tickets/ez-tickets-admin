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

type ProductEditState = {
  editProduct: EditProduct | null;
  setEditProduct: (value: EditProduct) => void;
  resetEditProduct: () => void;
};

export const useEditProductStore = create<ProductEditState>((set) => ({
  editProduct: null,
  setEditProduct: (value) => set({ editProduct: value }),
  resetEditProduct: () => set({ editProduct: null }),
}));
