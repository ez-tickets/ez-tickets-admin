import type { ProdRegistrationAction } from "@/admin/screen/Register/store/action/ProdRegistrationAction.ts";
import { prodRegisterReducer } from "@/admin/screen/Register/store/reducer/ProdRegistrationReducer.ts";
import type { RegisterProd } from "@/types.ts";
import { create } from "zustand/react";

interface ProdRegisterQueryDispatcher {
  prodRegisterQuery: RegisterProd[];
  prodRegisterDispatcher: (action: ProdRegistrationAction) => void;
}

export const useProdRegistrationStore = create<ProdRegisterQueryDispatcher>(
  (set) => ({
    prodRegisterQuery: [],
    prodRegisterDispatcher: (action) =>
      set((state) => {
        return {
          prodRegisterQuery: prodRegisterReducer(
            action,
            state.prodRegisterQuery,
          ),
        };
      }),
  }),
);
