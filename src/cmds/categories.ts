import { invoke } from "@tauri-apps/api/core";

export type Category = {
  id: string;
  name: string;
  order: number;
};

export const fetchCategories = async (): Promise<Category[]> => {
  return await invoke<Category[]>("categories");
};

export type RegisterCategory = {
  name: string;
};

export const registerCategory = async (
  input: RegisterCategory,
): Promise<void> => {
  await invoke<void>("register_category", { register: input });
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
  await invoke<void>("delete_category", { id: id });
};