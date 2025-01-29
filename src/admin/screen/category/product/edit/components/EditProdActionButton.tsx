import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { useCategoryModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { deleteProduct, updateProduct } from "@/cmds/products.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import type { EditProduct } from "@/types.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";

type EditProdActionButtonProps = {
  editProduct: EditProduct;
  name: string;
  desc: string;
  price: number;
  imgPath: string;
  setName: (name: string) => void;
  setDesc: (desc: string) => void;
  setPrice: (price: number) => void;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
};

function EditProdActionButton({
  editProduct,
  name,
  desc,
  price,
  imgPath,
  setName,
  setDesc,
  setPrice,
  setImgPath,
  setImage,
}: EditProdActionButtonProps) {
  const { changeEditModalFlag } = useCategoryModalStateStore();
  const [confirmModalView, setConfirmModalView] = useState<boolean>(false);
  const [taskType, setTaskType] = useState<string>("");
  const [executeHandler, setExecuteHandler] = useState<() => void>();

  const resetHandler = () => {
    setName(editProduct.name);
    setDesc(editProduct.desc);
    setPrice(editProduct.price);
    setImgPath("");
    setImage(convertFileSrc(""));
  };

  const updateHandler = async () => {
    await updateProduct(editProduct.id, {
      name: name,
      desc: desc,
      price: price,
      path: imgPath,
    });
    toast.success(
      <Fragment>
        商品「{editProduct.name}」の情報を
        <br />
        正常に更新しました！
      </Fragment>,
    );
  };

  const deleteHandler = async () => {
    await deleteProduct(editProduct.id);
    toast.success(
      <Fragment>
        商品「{editProduct.name}」を
        <br />
        正常に削除しました！
      </Fragment>,
    );
  };

  const openModalHandler = (type: string) => {
    switch (type) {
      case confirmAction.UPDATE:
        if (name === "" || desc === "" || price < 0 || imgPath === "") {
          toast.error("必須項目を入力してください");
          return;
        }
        setTaskType(confirmAction.UPDATE);
        setExecuteHandler(() => updateHandler);
        break;
      case confirmAction.DELETE:
        setTaskType(confirmAction.DELETE);
        setExecuteHandler(() => deleteHandler);
        break;
    }
    setConfirmModalView(true);
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
        confirmModalView={confirmModalView}
        setConfirmModalView={setConfirmModalView}
        setEditModal={changeEditModalFlag}
      />
    </Fragment>
  );
}

export default EditProdActionButton;
