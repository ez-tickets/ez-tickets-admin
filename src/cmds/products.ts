// noinspection JSUnusedLocalSymbols

import { invoke } from "@tauri-apps/api/core";

export type Product = {
  id: string;
  name: string;
  category: string | null;
  desc: string;
  price: number;
  path: string;
  order: number;
};

//todo: categoryIDを使ってfetchProductsを呼び出す
export const fetchProducts = async (): Promise<Product[]> => {
  return await invoke<Product[]>("products");
};

export type RegisterProduct = {
  name: string;
  category: string | null;
  desc: string;
  price: number;
  path: string;
};

export const registerProduct = async (
  input: RegisterProduct,
): Promise<void> => {
  await invoke<void>("register_product", { register: input });
};

//todo: pathははてなでいいのか？
export type UpdateProduct = {
  name: string;
  category: string | null;
  desc: string;
  price: number;
  path?: string;
};

export const updateProduct = async (
  id: string,
  input: UpdateProduct,
): Promise<void> => {
  await invoke<void>("update_product", { id: id, update: input });
};

export const deleteProduct = async (id: string): Promise<void> => {
  await invoke<void>("delete_product", { id: id });
};
