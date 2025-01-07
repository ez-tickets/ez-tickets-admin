import {
  selectModal,
  selectModalStyle,
} from "@/admin/screen/modal/selectModal/SelectModal.css.ts";
import { IconX } from "@tabler/icons-react";
import { Fragment, type JSX } from "react";
import Modal from "react-modal";

type SelectModalProps = {
  modalTitle: string;
  headerElement?: JSX.Element;
  toggleModal: boolean;
  closeHandler: () => void;
  parts: JSX.Element;
};

// biome-ignore format: enable ts-ignore.
function SelectModal({
  modalTitle,
  headerElement,
  toggleModal,
  closeHandler,
  parts,
}: SelectModalProps) {
  return (
    <Fragment>
      {/*@ts-ignore react version incompatible*/}
      <Modal isOpen={toggleModal} style={selectModal} onRequestClose={closeHandler}>
        <div className={selectModalStyle.headerContainer}>
          <h4 className={selectModalStyle.title}>{modalTitle}</h4>
          {headerElement}
        </div>
        <IconX
          type={"button"}
          className={selectModalStyle.closeIcon}
          onClick={closeHandler}
        />
        {parts}
      </Modal>
    </Fragment>
  );
}

export default SelectModal;
