import type { RegisterProd } from "@/types.ts";
import { create } from "zustand/react";

type EditState = {
  editProd: RegisterProd | null;
  setEditProd: (value: RegisterProd) => void;
  resetEditProd: () => void;
};

export const useEditProductStore = create<EditState>((set) => ({
  editProd: null,
  setEditProd: (value) => set({ editProd: value }),
  resetEditProd: () => set({ editProd: null }),
}));
