import EditImg from "@/admin/screen/Register/List/components/EditImg.tsx";
import EditName from "@/admin/screen/Register/List/components/EditName.tsx";
import EditPrice from "@/admin/screen/Register/List/components/EditPrice.tsx";
import ProdEditActionButton from "@/admin/screen/Register/List/components/ProdEditActionButton.tsx";
import {
  editModalStyle,
  prodEditModalStyle,
} from "@/admin/screen/Register/List/components/style/ProdEditModal.css.ts";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import { IconX } from "@tabler/icons-react";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment, useState } from "react";
import Modal from "react-modal";

type ProdEditModalProps = {
  editModal: boolean;
  setEditModal: (flag: boolean) => void;
};

function ProdEditModal({ editModal, setEditModal }: ProdEditModalProps) {
  const { editProd, resetEditProd } = useEditProductStore();
  if (!editProd) throw new Error("Prod not found.");

  const [editName, setEditName] = useState<string>(editProd.name);
  const [editPrice, setEditPrice] = useState<number>(editProd.price);
  const [editImgPath, setEditImgPath] = useState<string>(editProd.img);
  const [image, setImage] = useState<string>(convertFileSrc(editImgPath));

  const closeHandler = () => {
    setEditModal(false);
    resetEditProd();
  };

  return (
    <Fragment>
      {/*@ts-ignore react version incompatible*/}
      <Modal isOpen={editModal} style={editModalStyle}>
        <h1>編集モード</h1>
        <IconX
          type={"button"}
          className={prodEditModalStyle.closeIcon}
          onClick={closeHandler}
        />

        <div>
          <EditName editName={editName} setEditName={setEditName} />
          <EditPrice editPrice={editPrice} setEditPrice={setEditPrice} />
          <EditImg
            editImgPath={editImgPath}
            setEditImgPath={setEditImgPath}
            image={image}
            setImage={setImage}
          />

          <ProdEditActionButton
            editProd={editProd}
            editName={editName}
            editPrice={editPrice}
            editImgPath={editImgPath}
            setEditName={setEditName}
            setEditPrice={setEditPrice}
            setEditImgPath={setEditImgPath}
            setEditModal={setEditModal}
          />
        </div>
      </Modal>
    </Fragment>
  );
}

export default ProdEditModal;
