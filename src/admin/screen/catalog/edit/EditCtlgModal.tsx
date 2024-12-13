import { Fragment, useState } from "react";
import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import type { RegisterItem } from "@/types.ts";
import EditCatalogName from "@/admin/screen/catalog/edit/components/EditCatalogName.tsx";
import EditCatalogDesc from "@/admin/screen/catalog/edit/components/EditCatalogDesc.tsx";
import EditCatalogPrice from "@/admin/screen/catalog/edit/components/EditCatalogPrice.tsx";
import EditCatalogImg from "@/admin/screen/catalog/edit/components/EditCatalogImg.tsx";
import EditCatalogMain from "@/admin/screen/catalog/edit/components/EditCatalogMain.tsx";
import EditCatalogActionButton from "@/admin/screen/catalog/edit/components/EditCatalogActionButton.tsx";
import { useEditCatalogStore } from "@/admin/store/RegisteredEditStore.ts";
import { convertFileSrc } from "@tauri-apps/api/core";

type EditCtlgModalProps = {
  editModal: boolean;
  setEditModal: (flag: boolean) => void;
};

function EditCtlgModal({ editModal, setEditModal }: EditCtlgModalProps) {
  const { editCatalog } = useEditCatalogStore();
  if (!editCatalog) return;

  const [name, setName] = useState<string>(editCatalog.name);
  const [desc, setDesc] = useState<string>(editCatalog.desc);
  const [price, setPrice] = useState<number>(editCatalog.price);
  const [imgPath, setImgPath] = useState<string>(editCatalog.img);
  const [image, setImage] = useState<string>(convertFileSrc(imgPath));
  const [main, setMain] = useState<RegisterItem>(editCatalog.main);

  return (
    <ManageEntryModal
      modalTitle={"編集モード"}
      toggleModal={editModal}
      closeHandler={() => setEditModal(false)}
      parts={
        <Fragment>
          <EditCatalogName name={name} setName={setName} />
          <EditCatalogMain
            main={main}
            setMain={setMain}
            setImgPath={setImgPath}
            setImage={setImage}
          />
          <EditCatalogImg
            imgPath={imgPath}
            setImgPath={setImgPath}
            image={image}
            setImage={setImage}
          />
          <EditCatalogPrice price={price} setPrice={setPrice} />
          <EditCatalogDesc desc={desc} setDesc={setDesc} />


          <EditCatalogActionButton
            editCatalog={editCatalog}
            name={name}
            desc={desc}
            price={price}
            imgPath={imgPath}
            main={main}
            setName={setName}
            setDesc={setDesc}
            setPrice={setPrice}
            setImgPath={setImgPath}
            setImage={setImage}
            setMain={setMain}
            setEditModal={setEditModal}
          />
        </Fragment>
      }
    />
  );
}

export default EditCtlgModal;
