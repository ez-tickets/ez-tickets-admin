import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { useProductModalStateStore } from "@/admin/store/ModalStateStore.ts";
import {
  type UpdateProduct,
  deleteProduct,
  updateProduct,
} from "@/cmds/products.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import type { EditProduct } from "@/types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";

type EditProdActionButtonProps = {
  categoryID?: string;
  categoryName?: string;
  editProduct: EditProduct;
  name: string;
  categoryId: string;
  imgPath: string;
  price: number;
  desc: string;
  setName: (name: string) => void;
  setCategoryId: (categoryId: string) => void;
  setCategory: (category: string) => void;
  setDesc: (desc: string) => void;
  setPrice: (price: number) => void;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
};

function EditProdActionButton({
  categoryID,
  categoryName,
  editProduct,
  name,
  desc,
  price,
  imgPath,
  categoryId,
  setName,
  setDesc,
  setPrice,
  setImgPath,
  setImage,
  setCategory,
  setCategoryId,
}: EditProdActionButtonProps) {
  const { changeEditModalFlag } = useProductModalStateStore();
  const [confirmModalView, setConfirmModalView] = useState<boolean>(false);
  const [taskType, setTaskType] = useState<string>("");
  const [executeHandler, setExecuteHandler] = useState<() => void>();

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

  const updateHandler = async () => {
    if (imgPath === editProduct.imgUrl) {
      await updateExecHandler.mutateAsync({
        name: name,
        desc: desc,
        price: price,
      });
    } else {
      await updateExecHandler.mutateAsync({
        name: name,
        desc: desc,
        price: price,
        path: imgPath,
      });
    }
  };

  const deleteHandler = async () => {
    await deleteExecHandler.mutateAsync(editProduct.id);
  };

  const client = useQueryClient();
  const updateExecHandler = useMutation({
    mutationFn: async (update: UpdateProduct) =>
      await updateProduct(editProduct.id, update),
    onSuccess: (_, update) => {
      changeEditModalFlag(false);
      toast.success(
        <Fragment>
          商品「{update.name}」を
          <br />
          正常に削除しました！
        </Fragment>,
      );
    },
    onSettled: async () => {
      await client.invalidateQueries({
        queryKey: ["products_in_category"],
      });
    },
  });

  const deleteExecHandler = useMutation({
    mutationFn: async (id: string) => await deleteProduct(id),
    onSuccess: () => {
      changeEditModalFlag(false);
      toast.success(
        <Fragment>
          商品「{editProduct.name}」を
          <br />
          正常に削除しました！
        </Fragment>,
      );
    },
    onSettled: async () => {
      await client.invalidateQueries({
        queryKey: ["products_in_category"],
      });
    },
  });

  const resetHandler = () => {
    setName(editProduct.name);
    setDesc(editProduct.desc);
    setPrice(editProduct.price);
    setImgPath(`http://100.77.238.23:3650/images/${editProduct.id}`);
    setImage(`http://100.77.238.23:3650/images/${editProduct.id}`);
    categoryID ? setCategoryId(categoryId) : setCategoryId("");
    categoryName ? setCategory(categoryName) : setCategory("");
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
