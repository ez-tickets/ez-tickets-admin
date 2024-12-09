import type { CatalogRegistrationAction } from "@/admin/store/action/CatalogRegistrationAction.ts";
import type { CategoryRegistrationAction } from "@/admin/store/action/CategoryRegistrationAction.ts";
import type { ProdRegistrationAction } from "@/admin/store/action/ProdRegistrationAction.ts";
import { catalogReducer } from "@/admin/store/reducer/CatalogRegistrationReducer.ts";
import { categoryReducer } from "@/admin/store/reducer/CategoryRegistrationReducer.ts";
import { prodRegisterReducer } from "@/admin/store/reducer/ProdRegistrationReducer.ts";
import type {
  RegisterCatalog,
  RegisterCategory,
  RegisterProd,
} from "@/types.ts";
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

interface CategoryRegisterQueryDispatcher {
  categoryRegisterQuery: RegisterCategory[];
  categoryRegisterDispatcher: (action: CategoryRegistrationAction) => void;
}

export const useCategoryRegistrationStore =
  create<CategoryRegisterQueryDispatcher>((set) => ({
    categoryRegisterQuery: [],
    categoryRegisterDispatcher: (action) =>
      set((state) => {
        return {
          categoryRegisterQuery: categoryReducer(
            action,
            state.categoryRegisterQuery,
          ),
        };
      }),
  }));

interface CatalogRegisterQueryDispatcher {
  catalogRegisterQuery: RegisterCatalog[];
  catalogRegisterDispatcher: (action: CatalogRegistrationAction) => void;
}

export const useCatalogRegistrationStore =
  create<CatalogRegisterQueryDispatcher>((set) => ({
    catalogRegisterQuery: [],
    catalogRegisterDispatcher: (action) =>
      set((state) => {
        return {
          catalogRegisterQuery: catalogReducer(
            action,
            state.catalogRegisterQuery,
          ),
        };
      }),
  }));
