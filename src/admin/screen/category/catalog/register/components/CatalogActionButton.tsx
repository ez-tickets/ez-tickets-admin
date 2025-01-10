import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";

type CatalogActionButtonProps = {
  name: string;
  category: string;
  desc: string;
  price: number;
  imgPath: string;
  setName: (name: string) => void;
  setCategory: (category: string) => void;
  setDesc: (desc: string) => void;
  setPrice: (price: number) => void;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
  setToggleModal: (flag: boolean) => void;
};

function CatalogActionButton({
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
  setToggleModal,
}: CatalogActionButtonProps) {
  const [modalView, setModalView] = useState<boolean>(false);

  const resetHandler = () => {
    setName("");
    setCategory("");
    setDesc("");
    setPrice(0);
    setImgPath("");
    setImage("");
  };

  const openModalHandler = () => {
    if (
      name === "" ||
      category === "" ||
      desc === "" ||
      price === 0 ||
      imgPath === ""
    ) {
      toast.error("必須項目を入力してください");
      return;
    }
    setModalView(true);
  };

  const executeHandler = () => {
    //todo: サーバーに送信するデータ
    const registerCatalog = {
      name: name,
      category: category,
      desc: desc,
      price: price,
      img: imgPath,
    };

    resetHandler();
    setModalView(false);
    setToggleModal(false);
    toast.success("登録が完了しました");
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

export default CatalogActionButton;
