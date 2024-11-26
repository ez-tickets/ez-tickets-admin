import type { RegisterProduct, User } from "@/types.ts";

//ログインユーザー --------------------------------------------------------
export const user: User = {
  id: "1234",
  password: "pass",
};

//商品登録情報 ----------------------------------------------------------
export const registeredProducts: RegisterProduct[] = [
  {
    id: "1",
    prod: {
      name: "秋刀魚の塩焼き定食",
      price: 1200,
      quantity: 0,
    },
    options: [],
  },
  {
    id: "2",
    prod: {
      name: "醤油ラーメン",
      price: 950,
      quantity: 0,
    },
    options: [
      {
        id: "1",
        name: "チャーシュー",
        price: 200,
      },
      {
        id: "2",
        name: "メンマ",
        price: 50,
      },
      {
        id: "3",
        name: "もやし",
        price: 30,
      },
      {
        id: "4",
        name: "煮卵",
        price: 100,
      },
      {
        id: "5",
        name: "のり",
        price: 50,
      },
    ],
  },
  {
    id: "3",
    prod: {
      name: "プリン",
      price: 250,
      quantity: 30,
    },
    options: [
      {
        id: "1",
        name: "カラメル",
        price: 30,
      },
      {
        id: "2",
        name: "チョコ",
        price: 30,
      },
    ],
  },
];
