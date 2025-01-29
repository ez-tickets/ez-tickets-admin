import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { useProductModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { addProductToCategory } from "@/cmds/categories.ts";
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
  category: string;
  imgPath: string;
  setName: (name: string) => void;
  setDesc: (desc: string) => void;
  setPrice: (price: number) => void;
  setCategory: (category: string) => void;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
};

function ProductActionButton({
  categoryID,
  categoryName,
  name,
  desc,
  price,
  category,
  imgPath,
  setName,
  setDesc,
  setPrice,
  setCategory,
  setImgPath,
  setImage,
}: ProductActionButtonProps) {
  const { changeRegisterModalFlag } = useProductModalStateStore();
  const [confirmModalView, setConfirmModalView] = useState<boolean>(false);

  const resetHandler = () => {
    setName("");
    setDesc("");
    setPrice(0);
    categoryName ? setCategory(categoryName) : setCategory("");
    setImgPath("");
    setImage("");
  };

  const openModalHandler = () => {
    if (name === "" || desc === "" || price < 0 || imgPath === "") {
      toast.error("必須項目を入力してください");
      return;
    }
    setConfirmModalView(true);
  };

  const handler = async () => {
    if (category !== "") {
      await registerProductToCategoryHandler.mutateAsync({
        name: name,
        category: category,
        desc: desc,
        price: price,
        path: imgPath,
      });
    } else {
      await registerProductHandler.mutateAsync({
        name: name,
        category: category,
        desc: desc,
        price: price,
        path: imgPath,
      });
    }
  };

  const client = useQueryClient();
  const registerProductToCategoryHandler = useMutation({
    mutationFn: async (create: RegisterProduct) => {
      //todo: 商品全体とカテゴリーの中に商品登録するapi
      await registerProduct(create);
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
        queryKey: ["products_in_category"],
      });
    },
  });

  const registerProductHandler = useMutation({
    mutationFn: async (create: RegisterProduct) =>
      //todo: 商品全体に登録するapi
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
        queryKey: ["products_in_category"],
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
