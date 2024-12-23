// noinspection JSUnusedLocalSymbols

import { invoke } from "@tauri-apps/api/core";

export type Product = {
  id: string;
  name: string;
};

export const fetchProducts = async (): Promise<Product[]> => {
  return await invoke<Product[]>("products");
};

export type RegisterProduct = {
  name: string;
  path: string;
};

export const registerProduct = async (
  input: RegisterProduct,
): Promise<void> => {
  await invoke<void>("register_product", { register: input });
};

export type UpdateProduct = {
  name: string;
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
