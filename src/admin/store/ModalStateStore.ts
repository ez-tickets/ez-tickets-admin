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
