import type { ReNameCategory, RegisterCategory } from "@/types.ts";

export const REGISTRATION = "registration" as const;
export const registration = (category: RegisterCategory) => ({
  type: REGISTRATION,
  payload: category,
});

export const REPLACE_EDIT_CATEGORY = "replace-edit-category" as const;
export const replaceEditCategory = (category: ReNameCategory) => ({
  type: REPLACE_EDIT_CATEGORY,
  payload: category,
});

export const DELETE_CATEGORY = "delete-category";
export const deleteCategory = (id: string) => ({
  type: DELETE_CATEGORY,
  payload: id,
});

export const DEBUG = "debug" as const;
export const debug = () => ({
  type: DEBUG,
});

export type CategoryRegistrationAction =
  | ReturnType<typeof registration>
  | ReturnType<typeof replaceEditCategory>
  | ReturnType<typeof deleteCategory>
  | ReturnType<typeof debug>;
