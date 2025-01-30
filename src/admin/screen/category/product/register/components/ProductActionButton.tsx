import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { useProductModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { type RegisterProduct, registerProduct } from "@/cmds/products.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";

type ProductActionButtonProps = {
  categoryID?: string;
  categoryName?: string;
  name: string;
  desc: string;
  price: number;
  categoryId: string;
  imgPath: string;
  setName: (name: string) => void;
  setDesc: (desc: string) => void;
  setPrice: (price: number) => void;
  setCategory: (category: string) => void;
  setCategoryId: (categoryId: string) => void;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
};

function ProductActionButton({
  categoryID,
  categoryName,
  name,
  desc,
  price,
  categoryId,
  imgPath,
  setName,
  setDesc,
  setPrice,
  setCategory,
  setCategoryId,
  setImgPath,
  setImage,
}: ProductActionButtonProps) {
  const { changeRegisterModalFlag } = useProductModalStateStore();
  const [confirmModalView, setConfirmModalView] = useState<boolean>(false);

  const resetHandler = () => {
    setName("");
    categoryID ? setCategoryId(categoryID) : setCategoryId("");
    categoryName ? setCategory(categoryName) : setCategory("");
    setImgPath("");
    setImage("");
    setPrice(0);
    setDesc("");
  };

  const openModalHandler = () => {
    if (name === "" || desc === "" || price < 0 || imgPath === "") {
      toast.error("必須項目を入力してください");
      return;
    }
    setConfirmModalView(true);
  };

  const handler = async () => {
    if (categoryId !== "") {
      await registerProductToCategoryHandler.mutateAsync({
        name: name,
        desc: desc,
        price: price,
        path: imgPath,
        category: categoryId,
      });
    } else {
      await registerProductHandler.mutateAsync({
        name: name,
        desc: desc,
        price: price,
        path: imgPath,
      });
    }
  };

  const client = useQueryClient();
  const registerProductToCategoryHandler = useMutation({
    mutationFn: async (register: RegisterProduct) => {
      await registerProduct(register);
    },
    onSuccess: async (_, variables) => {
      resetHandler();
      changeRegisterModalFlag(false);
      toast.success(
        <Fragment>
          商品「{variables.name}」が
          <br />
          正常に登録されました！
        </Fragment>,
      );
    },
    onSettled: async () => {
      await client.invalidateQueries({
        queryKey: ["products_in_category", categoryId],
      });
    },
  });

  const registerProductHandler = useMutation({
    mutationFn: async (create: RegisterProduct) =>
      await registerProduct(create),
    onSuccess: async (_, variables) => {
      resetHandler();
      changeRegisterModalFlag(false);
      toast.success(
        <Fragment>
          商品「{variables.name}」が
          <br />
          正常に登録されました！
        </Fragment>,
      );
    },
    onSettled: async () => {
      await client.invalidateQueries({
        queryKey: ["products_in_category", categoryId],
      });
    },
  });

  return (
    <Fragment>
      <ExecuteButtonContainer
        button={
          <Fragment>
            <ExecuteButton
              name={"リセット"}
              style={executeButtonStyle.reset}
              executeHandler={resetHandler}
            />

            <ExecuteButton
              name={"登録する"}
              style={executeButtonStyle.run}
              executeHandler={openModalHandler}
            />
          </Fragment>
        }
      />

      <ConfirmModal
        taskType={confirmAction.REGISTRATION}
        executeHandler={handler}
        confirmModalView={confirmModalView}
        setConfirmModalView={setConfirmModalView}
      />
    </Fragment>
  );
}

export default ProductActionButton;
