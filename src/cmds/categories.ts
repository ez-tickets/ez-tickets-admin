import type { OrderedProduct } from "@/cmds/products.ts";
import { invoke } from "@tauri-apps/api/core";

export type Category = {
  id: string;
  name: string;
  ordering: number;
};

//カテゴリー情報を取得するapi
export const fetchCategories = async (): Promise<Category[]> => {
  return await invoke<Category[]>("get_categories");
};

export type CreateCategory = {
  name: string;
};

//カテゴリーを登録するapi
export const registerCategory = async (
  input: CreateCategory,
): Promise<void> => {
  await invoke<void>("create_category", { create: input });
};

export type UpdateCategory = {
  id: string;
  ctx: UpdateCategoryName;
};

export type UpdateCategoryName = {
  name: string;
};

//カテゴリ情報を更新するapi
export const updateCategoryName = async (
  update: UpdateCategory,
): Promise<void> => {
  await invoke<void>("update_category", { id: update.id, update: update.ctx });
};

//カテゴリーを削除するapi
export const deleteCategory = async (id: string): Promise<void> => {
  await invoke<void>("delete_category", { delete: id });
};

//登録商品を属するカテゴリーに登録するapi
export const addProductToCategory = async (
  category: string,
  product: OrderedProduct,
): Promise<void> => {
  await invoke<void>("add_product_to_category", {
    id: category,
    product: product,
  });
};

export type OrderedCategory = {
  id: string;
  ordering: number;
};

//カテゴリーの並び順を変更するapi
export const reorderCategories = async (
  reorder: OrderedCategory[],
): Promise<void> => {
  await invoke<void>("change_ordering_categories", { new: reorder });
};
