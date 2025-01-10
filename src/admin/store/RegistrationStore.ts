import type { CatalogRegistrationAction } from "@/admin/store/action/CatalogRegistrationAction.ts";
import type { CategoryRegistrationAction } from "@/admin/store/action/CategoryRegistrationAction.ts";
import { catalogReducer } from "@/admin/store/reducer/CatalogRegistrationReducer.ts";
import { categoryReducer } from "@/admin/store/reducer/CategoryRegistrationReducer.ts";
import type { EditProduct, ReNameCategory } from "@/types.ts";
import { create } from "zustand/react";

interface CategoryRegisterQueryDispatcher {
  categoryRegisterQuery: ReNameCategory[];
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
  catalogRegisterQuery: EditProduct[];
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
