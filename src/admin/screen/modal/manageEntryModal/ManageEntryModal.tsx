import {
  manageEntryModal,
  manageEntryModalContainer,
} from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.css.ts";
import { IconX } from "@tabler/icons-react";
import { Fragment, type JSX } from "react";
import Modal from "react-modal";

type EditModalProps = {
  modalTitle: string;
  headerElement?: JSX.Element;
  toggleModal: boolean;
  closeHandler: () => void;
  parts: JSX.Element;
};

function ManageEntryModal({
  modalTitle,
  headerElement,
  toggleModal,
  parts,
  closeHandler,
}: EditModalProps) {
  return (
    <Fragment>
      {/*@ts-ignore react version incompatible*/}
      <Modal
        isOpen={toggleModal}
        style={manageEntryModalContainer}
        onRequestClose={closeHandler}
      >
        <div className={manageEntryModal.headerContainer}>
          <h1 className={manageEntryModal.title}>{modalTitle}</h1>
          {headerElement}
        </div>
        <IconX
          type={"button"}
          className={manageEntryModal.closeIcon}
          onClick={closeHandler}
        />
        {parts}
      </Modal>
    </Fragment>
  );
}

export default ManageEntryModal;
