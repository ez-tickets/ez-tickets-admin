import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
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
  category: string | null;
  desc: string;
  price: number;
  imgPath: string;
  setName: (name: string) => void;
  setCategory: (category: string | null) => void;
  setDesc: (desc: string) => void;
  setPrice: (price: number) => void;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
  setEditModal: (flag: boolean) => void;
};

function EditProdActionButton({
  editProduct,
  name,
  category,
  desc,
  price,
  imgPath,
  setName,
  setCategory,
  setDesc,
  setPrice,
  setImgPath,
  setImage,
  setEditModal,
}: EditProdActionButtonProps) {
  const [modalView, setModalView] = useState<boolean>(false);
  const [taskType, setTaskType] = useState<string>("");
  const [executeHandler, setExecuteHandler] = useState<() => void>();

  const resetHandler = () => {
    setName(editProduct.name);
    setCategory(editProduct.category);
    setDesc(editProduct.desc);
    setPrice(editProduct.price);
    setImgPath(editProduct.path);
    setImage(convertFileSrc(editProduct.path));
  };

  const updateHandler = async () => {
    await updateProduct(editProduct.id, {
      name: name,
      category: category,
      desc: desc,
      price: price,
      path: imgPath,
    });
    toast.success("更新しました");
  };

  const deleteHandler = async () => {
    await deleteProduct(editProduct.id);
    toast.success("削除しました");
  };

  const openModalHandler = (type: string) => {
    switch (type) {
      case confirmAction.UPDATE:
        if (
          name === "" ||
          category === "" ||
          desc === "" ||
          price < 0 ||
          imgPath === ""
        ) {
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
    setModalView(true);
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
