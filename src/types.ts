//login --------------------------------------------------
export interface User {
  id: string;
  password: string;
}

//登録商品 ------------------------------------------------
export interface inputProdRegister {
  name: string;
  price: number;
  // img: string;
}

export interface RegisterProd {
  id: string;
  name: string;
  price: number;
  // img: string;
}

//商品登録情報 ---------------------------------------------
export interface Prod {
  name: string;
  price: number;
  quantity: number;
}

export interface ProdOption {
  id: string;
  name: string;
  price: number;
}

export interface RegisterProduct {
  id: string;
  prod: Prod;
  options: ProdOption[];
}
