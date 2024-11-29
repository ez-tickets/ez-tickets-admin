import EditModal from "@/admin/screen/editModal/EditModal.tsx";
import EditImg from "@/admin/screen/register/list/registryProd/components/EditImg.tsx";
import EditName from "@/admin/screen/register/list/registryProd/components/EditName.tsx";
import EditPrice from "@/admin/screen/register/list/registryProd/components/EditPrice.tsx";
import ProdEditActionButton from "@/admin/screen/register/list/registryProd/components/ProdEditActionButton.tsx";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment, useState } from "react";

type ProdEditModalProps = {
  editModal: boolean;
  setEditModal: (flag: boolean) => void;
};

function ProdEditModal({ editModal, setEditModal }: ProdEditModalProps) {
  const { editProd, resetEditProd } = useEditProductStore();
  if (!editProd) throw new Error("prod not found.");

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
      <EditModal
        editModal={editModal}
        setEditModal={setEditModal}
        closeHandler={closeHandler}
        editParts={
          <Fragment>
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
              setImage={setImage}
              setEditModal={setEditModal}
            />
          </Fragment>
        }
      />
    </Fragment>
  );
}

export default ProdEditModal;
