import {
  type CategoryRegistrationAction,
  DELETE_CATEGORY,
  REGISTRATION,
} from "@/admin/store/action/CategoryRegistrationAction.ts";
import type { RegisterCategory } from "@/types.ts";

let categoryID = 1;

export const categoryReducer = (
  action: CategoryRegistrationAction,
  prev: RegisterCategory[],
): RegisterCategory[] => {
  const state = prev;

  switch (action.type) {
    case REGISTRATION:
      // @ts-ignore wtf
      return [...state, { id: (categoryID++).toString(), ...action.payload }];
    case DELETE_CATEGORY:
      return state.filter((category) => category.id !== action.payload);
    default: {
      // linting error DO NOT TOUCH!
      // @ts-ignore
      const _: never = action;
    }
  }
  return state;
};
