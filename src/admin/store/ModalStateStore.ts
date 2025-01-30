import { create } from "zustand/react";

type CategoryModalType = {
  registerModalFlag: boolean;
  editModalFlag: boolean;
  changeRegisterModalFlag: (flag: boolean) => void;
  changeEditModalFlag: (flag: boolean) => void;
};

export const useCategoryModalStateStore = create<CategoryModalType>((set) => ({
  registerModalFlag: false,
  editModalFlag: false,
  changeRegisterModalFlag: (flag) => set({ registerModalFlag: flag }),
  changeEditModalFlag: (flag) => set({ editModalFlag: flag }),
}));

type ProductModalType = {
  registerModalFlag: boolean;
  editModalFlag: boolean;
  changeRegisterModalFlag: (flag: boolean) => void;
  changeEditModalFlag: (flag: boolean) => void;
};

export const useProductModalStateStore = create<ProductModalType>((set) => ({
  registerModalFlag: false,
  editModalFlag: false,
  changeRegisterModalFlag: (flag: boolean) => set({ registerModalFlag: flag }),
  changeEditModalFlag: (flag: boolean) => set({ editModalFlag: flag }),
}));
