//login --------------------------------------------------
export type User = {
  id: string;
  password: string;
};

//confirmModal ActionType --------------------------------------
export type ConfirmActionType = {
  REGISTRATION: string;
  UPDATE: string;
  DELETE: string;
};

//カテゴリー登録 -------------------------------------------
export type RegisterCategory = {
  name: string;
};

export type ReNameCategory = {
  id: string;
  name: string;
};

//商品登録情報 ---------------------------------------------
export type RegisterProduct = {
  name: string;
  category: string | null;
  desc: string;
  price: number;
  path: string;
};

export type EditProduct = {
  id: string;
  name: string;
  category: string | null;
  desc: string;
  price: number;
  path: string;
};
