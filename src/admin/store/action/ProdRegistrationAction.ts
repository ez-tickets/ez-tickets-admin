import type { InputProdRegister, RegisterProd } from "@/types.ts";

export const REGISTRATION = "registration" as const;
export const registration = (product: InputProdRegister) => ({
  type: REGISTRATION,
  payload: product,
});

export const REPLACE_EDITED_PRODUCT = "replace-edited-product" as const;
export const replaceEditedProduct = (editedProduct: RegisterProd) => ({
  type: REPLACE_EDITED_PRODUCT,
  payload: editedProduct,
});

export const DELETE_PRODUCT = "delete-product" as const;
export const deleteProduct = (id: string) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const DEBUG = "debug" as const;
export const debug = () => ({
  type: DEBUG,
});

export type ProdRegistrationAction =
  | ReturnType<typeof registration>
  | ReturnType<typeof replaceEditedProduct>
  | ReturnType<typeof deleteProduct>
  | ReturnType<typeof debug>;
