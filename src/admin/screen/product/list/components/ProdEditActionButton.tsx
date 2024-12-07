import ConfirmModal from "@/admin/screen/confirmModal/ConfirmModal.tsx";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import {
  deleteProduct,
  replaceEditedProduct,
} from "@/admin/store/action/ProdRegistrationAction.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/executeButton.css.ts";
import type { RegisterProd } from "@/types.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment, useState } from "react";

type ProdEditActionButtonProps = {
  editProd: RegisterProd;
  editName: string;
  editPrice: number;
  editImgPath: string;
  setEditName: (name: string) => void;
  setEditPrice: (price: number) => void;
  setEditImgPath: (path: string) => void;
  setImage: (image: string) => void;
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
  setImage,
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
    setImage(convertFileSrc(editProd.img));
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
      <ExecuteButtonContainer
        button={
          <Fragment>
            <ExecuteButton
              name={"リセット"}
              style={executeButtonStyle.editModalReset}
              executeHandler={resetHandler}
            />
            <ExecuteButton
              name={"更新する"}
              style={executeButtonStyle.editModalUpdate}
              executeHandler={() => openModalHandler(confirmAction.UPDATE)}
            />
            <ExecuteButton
              name={"削除する"}
              style={executeButtonStyle.editModalDelete}
              executeHandler={() => openModalHandler(confirmAction.DELETE)}
            />
          </Fragment>
        }
      />

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
