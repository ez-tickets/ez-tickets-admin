import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { registerProduct } from "@/cmds/products.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";

type ProductActionButtonProps = {
  categoryName?: string;
  name: string;
  category: string;
  desc: string;
  price: number;
  imgPath: string;
  available: boolean;
  setName: (name: string) => void;
  setCategory: (category: string) => void;
  setDesc: (desc: string) => void;
  setPrice: (price: number) => void;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
  setAvailable: (flag: boolean) => void;
  setToggleModal: (flag: boolean) => void;
};

function ProductActionButton({
  categoryName,
  name,
  category,
  desc,
  price,
  imgPath,
  available,
  setName,
  setCategory,
  setDesc,
  setPrice,
  setImgPath,
  setImage,
  setAvailable,
  setToggleModal,
}: ProductActionButtonProps) {
  const [modalView, setModalView] = useState<boolean>(false);

  const resetHandler = () => {
    categoryName && setCategory(categoryName);
    setName("");
    setDesc("");
    setPrice(0);
    setImgPath("");
    setImage("");
    setAvailable(false);
  };

  const openModalHandler = () => {
    if (name === "" || desc === "" || price < 0 || imgPath === "") {
      toast.error("必須項目を入力してください");
      return;
    }
    setModalView(true);
  };

  const executeHandler = async () => {
    await registerProduct({
      name: name,
      category: category,
      desc: desc,
      price: price,
      path: imgPath,
      available: available,
    });

    resetHandler();
    setToggleModal(false);
    toast.success(
      <Fragment>
        商品「{name}」が
        <br />
        正常に登録されました！
      </Fragment>,
    );
  };

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
        executeHandler={executeHandler}
        modalView={modalView}
        setModalView={setModalView}
      />
    </Fragment>
  );
}

export default ProductActionButton;
