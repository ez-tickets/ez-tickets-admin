import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { deleteProduct, updateProduct } from "@/cmds/products.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import type { RegisterProd } from "@/types.ts";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";

type ProdEditActionButtonProps = {
  editProd: RegisterProd;
  editName: string;
  editImgPath: string;
  image: string;
  setEditName: (name: string) => void;
  setEditImgPath: (path: string) => void;
  setImage: (img: string) => void;
  setEditModal: (flag: boolean) => void;
};

function EditProdActionButton({
  editProd,
  editName,
  editImgPath,
  image,
  setEditName,
  setEditImgPath,
  setImage,
  setEditModal,
}: ProdEditActionButtonProps) {
  const [modalView, setModalView] = useState<boolean>(false);
  const [taskType, setTaskType] = useState<string>("");
  const [executeHandler, setExecuteHandler] = useState<() => void>();

  const resetHandler = () => {
    setEditName(editProd.name);
    setEditImgPath("");
    setImage(`http://100.77.238.23:3650/contents?id=${editProd.id}`);
  };

  const updateHandler = async () => {
    await updateProduct(editProd.id, {
      name: editName,
      path: editImgPath,
    });
    toast.success("更新しました");
  };

  const deleteHandler = async () => {
    await deleteProduct(editProd.id);
    toast.success("削除しました");
  };

  const openModalHandler = (type: string) => {
    if (
      (editName !== "" && editImgPath !== "") ||
      (editName !== "" && image !== "")
    ) {
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

export default EditProdActionButton;
