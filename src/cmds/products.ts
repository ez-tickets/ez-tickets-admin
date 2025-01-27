// noinspection JSUnusedLocalSymbols

import { invoke } from "@tauri-apps/api/core";

export type Product = {
  id: string;
  name: string;
  price: number;
};

export const fetchProducts = async (): Promise<Product[]> => {
  return await invoke<Product[]>("get_products");
};

export type ProductInCategory = {
  id: string;
  name: string;
  ordering: number;
};

export const fetchProductsInCategory = async (
  id: string,
): Promise<ProductInCategory[]> => {
  return await invoke<ProductInCategory[]>("get_product_in_category", {
    id: id,
  });
};

type ProductDetails = {
  id: string;
  name: string;
  desc: string;
  price: number;
};

export const fetchProductDetails = async (
  id: string,
): Promise<ProductDetails> => {
  return await invoke<ProductDetails>("get_product_details", { id: id });
};

export type RegisterProduct = {
  name: string;
  desc: string;
  price: number;
  path: string;
};

export const registerProduct = async (
  input: RegisterProduct,
): Promise<void> => {
  await invoke<void>("register_product", { register: input });
};

export type UpdateProduct = {
  name?: string;
  desc?: string;
  price?: number;
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

export type OrderedProduct = {
  id: string;
  ordering: number;
};

export const reorderProducts = async (
  category_id: string,
  reorder: OrderedProduct[],
): Promise<void> => {
  await invoke<void>("change_ordering_product_in_category", {
    id: category_id,
    new: reorder,
  });
};
