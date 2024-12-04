import type { ConfirmActionType, User } from "@/types.ts";

//ログインユーザー --------------------------------------------------------
export const user: User = {
  id: "1234",
  password: "pass",
};

//確認モーダル ----------------------------------------------------------
export const confirmAction: ConfirmActionType = {
  REGISTRATION: "登録",
  UPDATE: "更新",
  DELETE: "削除",
};
