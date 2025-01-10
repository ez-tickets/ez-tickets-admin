import type { EditProduct, RegisterProduct } from "@/types.ts";

export const REGISTRATION = "registration" as const;
export const registration = (catalog: RegisterProduct) => ({
  type: REGISTRATION,
  payload: catalog,
});

export const REPLACE_EDIT_CATALOG = "replace-edit-product";
export const replaceEditCatalog = (catalog: EditProduct) => ({
  type: REPLACE_EDIT_CATALOG,
  payload: catalog,
});

export const DELETE_CATALOG = "delete-product";
export const deleteCatalog = (id: string) => ({
  type: DELETE_CATALOG,
  payload: id,
});

export const DEBUG = "debug" as const;
export const debug = () => ({
  type: DEBUG,
});

export type CatalogRegistrationAction =
  | ReturnType<typeof registration>
  | ReturnType<typeof replaceEditCatalog>
  | ReturnType<typeof deleteCatalog>
  | ReturnType<typeof debug>;
