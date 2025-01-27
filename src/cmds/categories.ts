import { invoke } from "@tauri-apps/api/core";

export type Category = {
  id: string;
  name: string;
  ordering: number;
};

export const fetchCategories = async (): Promise<Category[]> => {
  return await invoke<Category[]>("get_categories");
};

export type CreateCategory = {
  name: string;
};

export const registerCategory = async (
  input: CreateCategory,
): Promise<void> => {
  await invoke<void>("create_category", { create: input });
};

export type UpdateCategoryName = {
  name: string;
};

export const updateCategoryName = async (
  id: string,
  input: UpdateCategoryName,
): Promise<void> => {
  await invoke<void>("update_category", { id: id, update: input });
};

export const deleteCategory = async (id: string): Promise<void> => {
  await invoke<void>("delete_category", { delete: id });
};

export type OrderedCategory = {
  id: string;
  ordering: number;
};

export const reorderCategories = async (
  reorder: OrderedCategory[],
): Promise<void> => {
  await invoke<void>("change_ordering_categories", { new: reorder });
};
