import {
  type CategoryRegistrationAction,
  DEBUG,
  DELETE_CATEGORY,
  REGISTRATION,
  REPLACE_EDIT_CATEGORY,
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
    case REPLACE_EDIT_CATEGORY:
      return state.map((category) =>
        category.id === action.payload.id
          ? { ...category, ...action.payload }
          : category,
      );
    case DELETE_CATEGORY:
      return state.filter((category) => category.id !== action.payload);
    case DEBUG:
      return [
        ...state,
        { id: (categoryID++).toString(), category: "category" },
      ];
    default: {
      // linting error DO NOT TOUCH!
      // @ts-ignore
      const _: never = action;
    }
  }
  return state;
};
