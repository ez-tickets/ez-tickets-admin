import EditProdActionButton from "@/admin/screen/category/product/edit/components/EditProdActionButton.tsx";
import EditProdCategory from "@/admin/screen/category/product/edit/components/EditProdCategory.tsx";
import EditProdDesc from "@/admin/screen/category/product/edit/components/EditProdDesc.tsx";
import EditProdImg from "@/admin/screen/category/product/edit/components/EditProdImg.tsx";
import EditCatalogName from "@/admin/screen/category/product/edit/components/EditProdName.tsx";
import EditProdPrice from "@/admin/screen/category/product/edit/components/EditProdPrice.tsx";
import ProductAvailable from "@/admin/screen/category/product/register/components/ProductAvailable.tsx";
import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment, useState } from "react";

type EditProdModalProps = {
  editModal: boolean;
  setEditModal: (flag: boolean) => void;
};

function EditProdModal({ editModal, setEditModal }: EditProdModalProps) {
  const { editProduct } = useEditProductStore();
  if (!editProduct) throw new Error("product not found.");

  const [name, setName] = useState<string>(editProduct.name);
  const [imgPath, setImgPath] = useState<string>(editProduct.path);
  const [image, setImage] = useState<string>(convertFileSrc(imgPath));
  const [price, setPrice] = useState<number>(editProduct.price);
  const [desc, setDesc] = useState<string>(editProduct.desc);
  const [category, setCategory] = useState<string | null>(editProduct.category);
  const [available, setAvailable] = useState<boolean>(editProduct.available);

  return (
    <ManageEntryModal
      modalTitle={"編集モード"}
      toggleModal={editModal}
      closeHandler={() => setEditModal(false)}
      parts={
        <Fragment>
          <EditCatalogName name={name} setName={setName} />
          <EditProdImg
            imgPath={imgPath}
            setImgPath={setImgPath}
            image={image}
            setImage={setImage}
          />
          <EditProdPrice price={price} setPrice={setPrice} />
          <EditProdDesc desc={desc} setDesc={setDesc} />
          <EditProdCategory category={category} setCategory={setCategory} />
          {category ? (
            <ProductAvailable
              available={available}
              setAvailable={setAvailable}
            />
          ) : (
            ""
          )}

          <EditProdActionButton
            editProduct={editProduct}
            name={name}
            category={category}
            desc={desc}
            price={price}
            imgPath={imgPath}
            available={available}
            setName={setName}
            setCategory={setCategory}
            setDesc={setDesc}
            setPrice={setPrice}
            setImgPath={setImgPath}
            setImage={setImage}
            setAvailable={setAvailable}
            setEditModal={setEditModal}
          />
        </Fragment>
      }
    />
  );
}

export default EditProdModal;
