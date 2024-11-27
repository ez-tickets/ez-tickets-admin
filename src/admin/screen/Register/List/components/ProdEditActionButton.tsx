import ConfirmModal from "@/admin/screen/ConfirmModal/ConfirmModal.tsx";
import { prodEditActionButtonStyle } from "@/admin/screen/Register/List/components/style/ProdEditActionButton.css.ts";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import {
  deleteProduct,
  replaceEditedProduct,
} from "@/admin/store/action/ProdRegistrationAction.ts";
import { confirmAction } from "@/mockData.ts";
import type { RegisterProd } from "@/types.ts";
import { Fragment, useState } from "react";

type ProdEditActionButtonProps = {
  editProd: RegisterProd;
  editName: string;
  editPrice: number;
  editImgPath: string;
  setEditName: (name: string) => void;
  setEditPrice: (price: number) => void;
  setEditImgPath: (path: string) => void;
  setEditModal: (flag: boolean) => void;
};

function ProdEditActionButton({
  editProd,
  editName,
  editPrice,
  editImgPath,
  setEditName,
  setEditPrice,
  setEditImgPath,
  setEditModal,
}: ProdEditActionButtonProps) {
  const { prodRegisterDispatcher } = useProdRegistrationStore();
  const [modalView, setModalView] = useState<boolean>(false);
  const [taskType, setTaskType] = useState<string>("");
  const [executeHandler, setExecuteHandler] = useState<() => void>();

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

  const deleteHandler = () => {
    prodRegisterDispatcher(deleteProduct(editProd.id));
  };

  const openModalHandler = (type: string) => {
    if (editName !== "" && editPrice >= 0 && editImgPath !== "") {
      switch (type) {
        case confirmAction.UPDATE:
          setTaskType(confirmAction.UPDATE);
          setExecuteHandler(() => updateHandler);
          break;
        case confirmAction.DELETE:
          setTaskType(confirmAction.DELETE);
          setExecuteHandler(() => deleteHandler);
          break;
      }
      setModalView(true);
    }
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
          onClick={() => openModalHandler(confirmAction.UPDATE)}
        >
          更新する
        </button>

        <button
          type={"button"}
          className={prodEditActionButtonStyle.deleteButton}
          onClick={() => openModalHandler(confirmAction.DELETE)}
        >
          削除する
        </button>
      </div>

      <ConfirmModal
        taskType={taskType}
        executeHandler={executeHandler}
        modalView={modalView}
        setModalView={setModalView}
        setEditModal={setEditModal}
      />
    </Fragment>
  );
}

export default ProdEditActionButton;
