import {
  DEBUG,
  DELETE_PRODUCT,
  type ProdRegistrationAction,
  REGISTRATION,
  REPLACE_EDITED_PRODUCT,
} from "@/admin/store/action/ProdRegistrationAction.ts";
import type { RegisterProd } from "@/types.ts";

let prodID = 1;

export const prodRegisterReducer = (
  action: ProdRegistrationAction,
  prev: RegisterProd[],
): RegisterProd[] => {
  const state = prev;

  switch (action.type) {
    case REGISTRATION:
      return [...state, { id: (prodID++).toString(), ...action.payload }];
    case REPLACE_EDITED_PRODUCT:
      return state.map((prod) =>
        prod.id === action.payload.id ? { ...prod, ...action.payload } : prod,
      );
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    case DEBUG:
      return [
        ...state,
        {
          id: (prodID++).toString(),
          name: "sample product",
          price: 100,
          img: "",
        },
      ];
    default: {
      // linting error DO NOT TOUCH!
      // @ts-ignore
      const _: never = action;
    }
  }
  return state;
};
