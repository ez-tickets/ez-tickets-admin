import {
  manageEntryModal,
  manageEntryModalContainer,
} from "@/admin/screen/ManageEntryModal/ManageEntryModal.css.ts";
import { IconX } from "@tabler/icons-react";
import { Fragment, type JSX } from "react";
import Modal from "react-modal";

type EditModalProps = {
  modalTitle: string;
  toggleModal: boolean;
  closeHandler: () => void;
  editParts: JSX.Element;
};

function ManageEntryModal({
  modalTitle,
  toggleModal,
  editParts,
  closeHandler,
}: EditModalProps) {
  return (
    <Fragment>
      {/*@ts-ignore react version incompatible*/}
      <Modal isOpen={toggleModal} style={manageEntryModalContainer}>
        <h1>{modalTitle}</h1>
        <IconX
          type={"button"}
          className={manageEntryModal.closeIcon}
          onClick={closeHandler}
        />
        {editParts}
      </Modal>
    </Fragment>
  );
}

export default ManageEntryModal;
