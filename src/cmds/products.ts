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
