import EditCatalogActionButton from "@/admin/screen/category/catalog/edit/components/EditCatalogActionButton.tsx";
import EditCatalogCategory from "@/admin/screen/category/catalog/edit/components/EditCatalogCategory.tsx";
import EditCatalogDesc from "@/admin/screen/category/catalog/edit/components/EditCatalogDesc.tsx";
import EditCatalogImg from "@/admin/screen/category/catalog/edit/components/EditCatalogImg.tsx";
import EditCatalogName from "@/admin/screen/category/catalog/edit/components/EditCatalogName.tsx";
import EditCatalogPrice from "@/admin/screen/category/catalog/edit/components/EditCatalogPrice.tsx";
import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import { useEditCatalogStore } from "@/admin/store/RegisteredEditStore.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment, useState } from "react";

type EditCtlgModalProps = {
  editModal: boolean;
  setEditModal: (flag: boolean) => void;
};

function EditCtlgModal({ editModal, setEditModal }: EditCtlgModalProps) {
  const { editCatalog } = useEditCatalogStore();
  if (!editCatalog) return;

  const [name, setName] = useState<string>(editCatalog.name);
  const [category, setCategory] = useState<string | null>(editCatalog.category);
  const [desc, setDesc] = useState<string>(editCatalog.desc);
  const [price, setPrice] = useState<number>(editCatalog.price);
  const [imgPath, setImgPath] = useState<string>(editCatalog.path);
  const [image, setImage] = useState<string>(convertFileSrc(imgPath));

  return (
    <ManageEntryModal
      modalTitle={"編集モード"}
      toggleModal={editModal}
      closeHandler={() => setEditModal(false)}
      parts={
        <Fragment>
          <EditCatalogName name={name} setName={setName} />
          <EditCatalogCategory category={category} setCategory={setCategory} />
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
            category={category}
            desc={desc}
            price={price}
            imgPath={imgPath}
            setName={setName}
            setCategory={setCategory}
            setDesc={setDesc}
            setPrice={setPrice}
            setImgPath={setImgPath}
            setImage={setImage}
            setEditModal={setEditModal}
          />
        </Fragment>
      }
    />
  );
}

export default EditCtlgModal;
