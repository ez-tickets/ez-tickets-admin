import type { Catalog } from "@/types.ts";

export const REGISTRATION = "registration" as const;
export const registration = (catalog: Catalog) => ({
  type: REGISTRATION,
  payload: catalog,
});

export const REPLACE_EDIT_CATALOG = "replace-edit-catalog";
export const replace_edit_catalog = (catalog: Catalog) => ({
  type: REPLACE_EDIT_CATALOG,
  payload: catalog,
});

export const DELETE_CATALOG = "delete-catalog";
export const delete_catalog = (id: string) => ({
  type: DELETE_CATALOG,
  payload: id,
});

export const DEBUG = "debug" as const;
export const debug = () => ({
  type: DEBUG,
});

export type CatalogRegistrationAction =
  | ReturnType<typeof registration>
  | ReturnType<typeof replace_edit_catalog>
  | ReturnType<typeof delete_catalog>
  | ReturnType<typeof debug>;
