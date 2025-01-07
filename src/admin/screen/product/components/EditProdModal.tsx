import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import EditProdActionButton from "@/admin/screen/product/components/EditProdActionButton.tsx";
import EditProdImg from "@/admin/screen/product/components/EditProdImg.tsx";
import EditProdName from "@/admin/screen/product/components/EditProdName.tsx";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import { Fragment, useState } from "react";

type ProdEditModalProps = {
  editModal: boolean;
  setEditModal: (flag: boolean) => void;
};

function EditProdModal({ editModal, setEditModal }: ProdEditModalProps) {
  const { editProd, resetEditProd } = useEditProductStore();
  if (!editProd) throw new Error("list not found.");

  const [editName, setEditName] = useState<string>(editProd.name);
  const [editImgPath, setEditImgPath] = useState<string>("");
  const [image, setImage] = useState<string>(
    `http://100.77.238.23:3650/contents?id=${editProd.id}`,
  );

  const closeHandler = () => {
    setEditModal(false);
    resetEditProd();
  };

  return (
    <ManageEntryModal
      modalTitle={"編集モード"}
      toggleModal={editModal}
      closeHandler={closeHandler}
      parts={
        <Fragment>
          <EditProdName editName={editName} setEditName={setEditName} />
          <EditProdImg
            editImgPath={editImgPath}
            setEditImgPath={setEditImgPath}
            image={image}
            setImage={setImage}
          />

          <EditProdActionButton
            editProd={editProd}
            editName={editName}
            editImgPath={editImgPath}
            image={image}
            setEditName={setEditName}
            setEditImgPath={setEditImgPath}
            setImage={setImage}
            setEditModal={setEditModal}
          />
        </Fragment>
      }
    />
  );
}

export default EditProdModal;
