import ConfirmModal from "@/admin/screen/confirmModal/ConfirmModal.tsx";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { registration } from "@/admin/store/action/ProdRegistrationAction.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/executeButton.css.ts";
import { Fragment, useState } from "react";

type ProdActiveButtonProps = {
  prodName: string;
  prodPrice: number;
  prodImgPath: string;
  setProdName: (name: string) => void;
  setProdPrice: (price: number) => void;
  setProdImgPath: (img: string) => void;
  setImage: (img: string) => void;
};

function ProdActiveButton({
  prodName,
  prodPrice,
  prodImgPath,
  setProdName,
  setProdPrice,
  setProdImgPath,
  setImage,
}: ProdActiveButtonProps) {
  const { prodRegisterDispatcher } = useProdRegistrationStore();
  const [modalView, setModalView] = useState<boolean>(false);

  const resetHandler = () => {
    setProdName("");
    setProdPrice(0);
    setProdImgPath("");
    setImage("");
  };

  const openModalHandler = () => {
    if (prodName !== "" && prodPrice >= 0 && prodImgPath !== "") {
      setModalView(true);
    }
  };

  const executeHandler = () => {
    const prodRegisterValue = {
      name: prodName,
      price: prodPrice,
      img: prodImgPath,
    };
    prodRegisterDispatcher(registration(prodRegisterValue));

    setProdName("");
    setProdPrice(0);
    setProdImgPath("");
    setImage("");
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

export default ProdActiveButton;
