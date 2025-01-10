import EditProdActionButton from "@/admin/screen/category/product/edit/components/EditProdActionButton.tsx";
import EditProdCategory from "@/admin/screen/category/product/edit/components/EditProdCategory.tsx";
import EditProdDesc from "@/admin/screen/category/product/edit/components/EditProdDesc.tsx";
import EditProdImg from "@/admin/screen/category/product/edit/components/EditProdImg.tsx";
import EditCatalogName from "@/admin/screen/category/product/edit/components/EditProdName.tsx";
import EditProdPrice from "@/admin/screen/category/product/edit/components/EditProdPrice.tsx";
import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import { useEditCatalogStore } from "@/admin/store/RegisteredEditStore.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment, useState } from "react";

type EditProdModalProps = {
  editModal: boolean;
  setEditModal: (flag: boolean) => void;
};

function EditProdModal({ editModal, setEditModal }: EditProdModalProps) {
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
          <EditProdCategory category={category} setCategory={setCategory} />
          <EditProdImg
            imgPath={imgPath}
            setImgPath={setImgPath}
            image={image}
            setImage={setImage}
          />
          <EditProdPrice price={price} setPrice={setPrice} />
          <EditProdDesc desc={desc} setDesc={setDesc} />

          <EditProdActionButton
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

export default EditProdModal;
