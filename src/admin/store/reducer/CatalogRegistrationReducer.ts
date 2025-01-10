import {
  type CatalogRegistrationAction,
  DEBUG,
  DELETE_CATALOG,
  REGISTRATION,
  REPLACE_EDIT_CATALOG,
} from "@/admin/store/action/CatalogRegistrationAction.ts";
import type { EditProduct } from "@/types.ts";

let catalogID = 1;

export const catalogReducer = (
  action: CatalogRegistrationAction,
  prev: EditProduct[],
) => {
  const state = prev;

  switch (action.type) {
    case REGISTRATION:
      return [
        ...prev,
        // @ts-ignore wtf
        { id: (catalogID++).toString(), ...action.payload },
      ];
    case REPLACE_EDIT_CATALOG: {
      const payload = <EditProduct>action.payload;
      return state.map((catalog) =>
        catalog.id === payload.id ? { catalog, ...payload } : catalog,
      );
    }
    case DELETE_CATALOG:
      return state.filter((catalog) => catalog.id !== action.payload);
    case DEBUG:
      return [
        ...state,
        {
          id: (catalogID++).toString(),
          name: "至高のこだわり醤油ラーメン",
          desc: "厳選された素材と伝統の技法で作り上げた、心温まる一杯。醤油の深い旨味と香りが際立つ、懐かしさと新しさを融合させたラーメンです。",
          price: 950,
          img: "",
          main: { id: "1", name: "醤油ラーメン" },
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
