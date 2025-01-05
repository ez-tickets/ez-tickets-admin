import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { useCatalogRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { registration } from "@/admin/store/action/CatalogRegistrationAction.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import type { RegisterItem } from "@/types.ts";
import { Fragment, useState } from "react";

type CatalogActionButtonProps = {
  name: string;
  desc: string;
  price: number;
  imgPath: string;
  main: RegisterItem;
  setName: (name: string) => void;
  setDesc: (desc: string) => void;
  setPrice: (price: number) => void;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
  setMain: (main: RegisterItem) => void;
  setToggleModal: (flag: boolean) => void;
};

function CatalogActionButton({
  name,
  desc,
  price,
  imgPath,
  main,
  setName,
  setDesc,
  setPrice,
  setImgPath,
  setImage,
  setMain,
  setToggleModal,
}: CatalogActionButtonProps) {
  const { catalogRegisterDispatcher } = useCatalogRegistrationStore();
  const [modalView, setModalView] = useState<boolean>(false);

  const resetHandler = () => {
    setName("");
    setDesc("");
    setPrice(0);
    setImgPath("");
    setImage("");
    setMain({ id: "0", name: "" });
  };

  const openModalHandler = () => {
    if (
      name !== "" &&
      desc !== "" &&
      price !== 0 &&
      imgPath !== "" &&
      main.id !== "" &&
      main.name !== ""
    ) {
      setModalView(true);
    }
  };

  const executeHandler = () => {
    const registerCatalogValue = {
      name: name,
      desc: desc,
      price: price,
      img: imgPath,
      main: main,
    };
    //登録
    catalogRegisterDispatcher(registration(registerCatalogValue));

    setName("");
    setDesc("");
    setPrice(0);
    setImgPath("");
    setImage("");
    setMain({ id: "0", name: "" });
    setModalView(false);
    setToggleModal(false);
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
