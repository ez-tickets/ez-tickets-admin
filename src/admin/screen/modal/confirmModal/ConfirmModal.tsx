import {
  confirmModalContainer,
  confirmModalStyle,
} from "@/admin/screen/modal/confirmModal/ConfirmModal.css.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment } from "react";
import Modal from "react-modal";

type ConfirmModalProps = {
  taskType: string;
  executeHandler?: () => void;
  modalView: boolean;
  setModalView: (flag: boolean) => void;
  setEditModal?: (flag: boolean) => void;
};

function ConfirmModal({
  taskType,
  executeHandler,
  modalView,
  setModalView,
  setEditModal,
}: ConfirmModalProps) {
  const yesHandler = () => {
    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    executeHandler && executeHandler();
    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    setEditModal && setEditModal(false);
    setModalView(false);
  };

  return (
    <Fragment>
      {/*@ts-ignore react version incompatible*/}
      <Modal
        isOpen={modalView}
        style={confirmModalContainer}
        onRequestClose={() => setModalView(false)}
      >
        <p className={confirmModalStyle.text}>
          {taskType}してもよろしいですか？
        </p>
        <div className={confirmModalStyle.buttonContainer}>
          <ExecuteButton
            name={"キャンセル"}
            style={executeButtonStyle.confirmModalCancel}
            executeHandler={() => setModalView(false)}
          />

          <ExecuteButton
            name={"はい"}
            style={executeButtonStyle.confirmModalYes}
            executeHandler={yesHandler}
          />
        </div>
      </Modal>
    </Fragment>
  );
}

export default ConfirmModal;
