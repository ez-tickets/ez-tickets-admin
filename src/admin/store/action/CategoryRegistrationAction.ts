import type { InputCategoryRegister } from "@/types.ts";

export const REGISTRATION = "registration" as const;
export const registration = (category: InputCategoryRegister) => ({
  type: REGISTRATION,
  payload: category,
});

export const DELETE_CATEGORY = "delete-category";
export const deleteCategory = (id: string) => ({
  type: DELETE_CATEGORY,
  payload: id,
});

export type CategoryRegistrationAction =
  | ReturnType<typeof registration>
  | ReturnType<typeof deleteCategory>;
