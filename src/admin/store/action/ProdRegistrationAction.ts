import type { InputProdRegister } from "@/types.ts";

export const REGISTRATION = "registration" as const;
export const registration = (product: InputProdRegister) => ({
  type: REGISTRATION,
  payload: product,
});

export const DELETE_PROD = "delete-prod" as const;
export const deleteProduct = (id: string) => ({
  type: DELETE_PROD,
  payload: id,
});

export type ProdRegistrationAction =
  | ReturnType<typeof registration>
  | ReturnType<typeof deleteProduct>;
