import { prodEditActionButtonStyle } from "@/admin/screen/Register/List/components/style/ProdEditActionButton.css.ts";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import {
  deleteProduct,
  replaceEditedProduct,
} from "@/admin/store/action/ProdRegistrationAction.ts";
import type { RegisterProd } from "@/types.ts";
import { Fragment } from "react";

type ProdEditActionButtonProps = {
  editProd: RegisterProd;
  editName: string;
  editPrice: number;
  editImgPath: string;
  setEditName: (name: string) => void;
  setEditPrice: (price: number) => void;
  setEditImgPath: (path: string) => void;
};

function ProdEditActionButton({
  editProd,
  editName,
  editPrice,
  editImgPath,
  setEditName,
  setEditPrice,
  setEditImgPath,
}: ProdEditActionButtonProps) {
  const { prodRegisterDispatcher } = useProdRegistrationStore();
  const resetHandler = () => {
    setEditName(editProd.name);
    setEditPrice(editProd.price);
    setEditImgPath(editProd.img);
  };

  const updateHandler = () => {
    const editedProd = {
      id: editProd.id,
      name: editName,
      price: editPrice,
      img: editImgPath,
    };
    prodRegisterDispatcher(replaceEditedProduct(editedProd));
  };

  return (
    <Fragment>
      <div className={prodEditActionButtonStyle.buttonContainer}>
        <button
          type={"button"}
          className={prodEditActionButtonStyle.resetButton}
          onClick={resetHandler}
        >
          リセット
        </button>

        <button
          type={"button"}
          className={prodEditActionButtonStyle.registerButton}
          onClick={updateHandler}
        >
          更新する
        </button>

        <button
          type={"button"}
          className={prodEditActionButtonStyle.deleteButton}
          onClick={() => prodRegisterDispatcher(deleteProduct(editProd.id))}
        >
          削除する
        </button>
      </div>
    </Fragment>
  );
}

export default ProdEditActionButton;
