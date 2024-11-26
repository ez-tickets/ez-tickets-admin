import {
  DELETE_PROD,
  type ProdRegistrationAction,
  REGISTRATION,
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
    case DELETE_PROD:
      return state.filter((product) => product.id !== action.payload);
    default: {
      // linting error DO NOT TOUCH!
      // @ts-ignore
      const _: never = action;
    }
  }
  return state;
};
