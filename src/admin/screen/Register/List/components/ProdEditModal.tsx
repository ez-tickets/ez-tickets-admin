import { editModalStyle } from "@/admin/screen/Register/List/RegisterList.css.ts";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import { Fragment } from "react";
import Modal from "react-modal";

type ProdEditModalProps = {
  editModal: boolean;
  setEditModal: (flag: boolean) => void;
};

function ProdEditModal({ editModal, setEditModal }: ProdEditModalProps) {
  const { editProd } = useEditProductStore();
  return (
    <Fragment>
      {/*@ts-ignore react version incompatible*/}
      <Modal isOpen={editModal} style={editModalStyle}>
        <button type={"button"} onClick={() => setEditModal(false)}>
          とじる
        </button>
        <p>{editProd?.id}</p>
        <p>{editProd?.name}</p>
        <p>{editProd?.price}</p>
        <p>{editProd?.img}</p>
      </Modal>
    </Fragment>
  );
}

export default ProdEditModal;
