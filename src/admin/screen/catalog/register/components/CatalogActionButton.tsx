import ConfirmModal from "@/admin/screen/confirmModal/ConfirmModal.tsx";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/executeButton.css.ts";
import { Fragment, useState } from "react";

function CatalogActionButton() {
  const [modalView, setModalView] = useState<boolean>(false);

  const resetHandler = () => {};

  const openModalHandler = () => {
    setModalView(true);
  };

  const executeHandler = () => {
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
