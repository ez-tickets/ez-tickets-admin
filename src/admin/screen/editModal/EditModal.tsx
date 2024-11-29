import {
  editModalContainer,
  editModalStyle,
} from "@/admin/screen/editModal/EditModal.css.ts";
import { IconX } from "@tabler/icons-react";
import { Fragment, type JSX } from "react";
import Modal from "react-modal";

type EditModalProps = {
  editModal: boolean;
  setEditModal: (flag: boolean) => void;
  closeHandler: () => void;
  editParts: JSX.Element;
};

function EditModal({ editModal, editParts, closeHandler }: EditModalProps) {
  return (
    <Fragment>
      {/*@ts-ignore react version incompatible*/}
      <Modal isOpen={editModal} style={editModalContainer}>
        <h1>編集モード</h1>
        <IconX
          type={"button"}
          className={editModalStyle.closeIcon}
          onClick={closeHandler}
        />
        {editParts}
      </Modal>
    </Fragment>
  );
}

export default EditModal;
