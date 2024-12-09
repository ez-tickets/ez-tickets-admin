//login --------------------------------------------------
export interface User {
  id: string;
  password: string;
}

//confirmModal ActionType --------------------------------------
export interface ConfirmActionType {
  REGISTRATION: string;
  UPDATE: string;
  DELETE: string;
}

//登録商品 ------------------------------------------------
export interface InputProdRegister {
  name: string;
  img: string;
}

export interface RegisterProd {
  id: string;
  name: string;
  img: string;
}

//カテゴリー登録 -------------------------------------------
export type InputCategoryRegister = {
  category: string;
};

export type RegisterCategory = {
  id: string;
  category: string;
};

//カタログ登録情報 ---------------------------------------------
export interface RegisterItem {
  id: string;
  name: string;
}

export interface InputCatalog {
  name: string;
  desc: string;
  price: number;
  img: string;
  main: RegisterItem;
}

export interface RegisterCatalog {
  id: string;
  name: string;
  desc: string;
  price: number;
  img: string;
  main: RegisterItem;
}
