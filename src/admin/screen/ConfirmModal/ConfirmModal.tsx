import { confirmModalStyle } from "@/admin/screen/ConfirmModal/ConfirmModal.css.ts";
import { registerModalStyle } from "@/admin/screen/Register/Prod/ProductRegister.css.ts";
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
  const cancelHandler = () => {
    setModalView(false);
  };

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
      <Modal isOpen={modalView} style={registerModalStyle}>
        <p className={confirmModalStyle.text}>
          {taskType}してもよろしいですか？
        </p>
        <div className={confirmModalStyle.buttonContainer}>
          <button
            type={"button"}
            className={confirmModalStyle.buttonNo}
            onClick={cancelHandler}
          >
            キャンセル
          </button>
          <button
            type={"button"}
            className={confirmModalStyle.buttonYes}
            onClick={yesHandler}
          >
            はい
          </button>
        </div>
      </Modal>
    </Fragment>
  );
}

export default ConfirmModal;
