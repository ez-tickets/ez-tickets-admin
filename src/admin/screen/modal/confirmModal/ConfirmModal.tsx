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
  confirmModalView: boolean;
  setConfirmModalView: (flag: boolean) => void;
  setEditModal?: (flag: boolean) => void;
};

// biome-ignore format: enable ts-ignore.
function ConfirmModal({
  taskType,
  executeHandler,
  confirmModalView,
  setConfirmModalView,
  setEditModal,
}: ConfirmModalProps) {
  const yesHandler = () => {
    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    executeHandler && executeHandler();
    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    setEditModal && setEditModal(false);
    setConfirmModalView(false);
  };

  return (
    <Fragment>
      {/*@ts-ignore react version incompatible*/}
      <Modal isOpen={confirmModalView} style={confirmModalContainer} onRequestClose={() => setConfirmModalView(false)}>
        <div className={confirmModalStyle.container}>
          <p className={confirmModalStyle.text}>
            {taskType}してもよろしいですか？
          </p>
          <div className={confirmModalStyle.buttonContainer}>
            <ExecuteButton
              name={"キャンセル"}
              style={executeButtonStyle.confirmModalCancel}
              executeHandler={() => setConfirmModalView(false)}
            />

            <ExecuteButton
              name={"はい"}
              style={executeButtonStyle.confirmModalYes}
              executeHandler={yesHandler}
            />
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}

export default ConfirmModal;
