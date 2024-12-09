import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { useCatalogRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { registration } from "@/admin/store/action/CatalogRegistrationAction.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment, useState } from "react";

type CatalogActionButtonProps = {
  name: string;
  desc: string;
  price: number;
  imgPath: string;
  image: string;
  main: string;
  sub: string;
  options: string;
  setName: (name: string) => void;
  setDesc: (desc: string) => void;
  setPrice: (price: number) => void;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
  setMain: (main: string) => void;
  setSub: (sub: string) => void;
  setOptions: (options: string) => void;
};

function CatalogActionButton({
  name,
  desc,
  price,
  imgPath,
  image,
  main,
  sub,
  options,
  setName,
  setDesc,
  setPrice,
  setImgPath,
  setImage,
  setMain,
  setSub,
  setOptions,
}: CatalogActionButtonProps) {
  const { catalogRegisterDispatcher } = useCatalogRegistrationStore();
  const [modalView, setModalView] = useState<boolean>(false);

  const resetHandler = () => {
    setName("");
    setDesc("");
    setPrice(0);
    setImgPath("");
    setImage("");
    setMain("");
    setSub("");
    setOptions("");
  };

  const openModalHandler = () => {
    setModalView(true);
  };

  const executeHandler = () => {
    const registerCatalogValue = {
      name: name,
      desc: desc,
      price: price,
      imgPath: imgPath,
      main: main,
      sub: sub,
      options: options,
    };
    catalogRegisterDispatcher(registration(registerCatalogValue));

    setName("");
    setDesc("");
    setPrice(0);
    setImgPath("");
    setImage("");
    setMain("");
    setSub("");
    setOptions("");
    setModalView(false);
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
        taskType={confirmAction.REGISTRATION} //タイプ
        executeHandler={executeHandler} //はい　handler()
        modalView={modalView} //モーダルvisibility
        setModalView={setModalView} //モーダル切り替え
      />
    </Fragment>
  );
}

export default CatalogActionButton;
