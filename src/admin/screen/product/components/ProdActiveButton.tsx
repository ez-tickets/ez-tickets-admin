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
  prodImgPath: string;
  setProdName: (name: string) => void;
  setProdImgPath: (path: string) => void;
  setImage: (img: string) => void;
  setToggleModal: (flag: boolean) => void;
};

function ProdActiveButton({
  prodName,
  prodImgPath,
  setProdName,
  setProdImgPath,
  setImage,
  setToggleModal,
}: ProdActiveButtonProps) {
  const { prodRegisterDispatcher } = useProdRegistrationStore();
  const [modalView, setModalView] = useState<boolean>(false);

  const resetHandler = () => {
    setProdName("");
    setProdImgPath("");
    setImage("");
  };

  const openModalHandler = () => {
    if (prodName !== "" && prodImgPath !== "") {
      setModalView(true);
    }
  };

  const executeHandler = () => {
    const prodRegisterValue = {
      name: prodName,
      img: prodImgPath,
    };
    prodRegisterDispatcher(registration(prodRegisterValue));

    setProdName("");
    setProdImgPath("");
    setImage("");
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
        taskType={confirmAction.REGISTRATION} //タイプ
        executeHandler={executeHandler} //はい　handler()
        modalView={modalView} //モーダルvisibility
        setModalView={setModalView} //モーダル切り替え
      />
    </Fragment>
  );
}

export default ProdActiveButton;
