import EditProdActionButton from "@/admin/screen/category/product/edit/components/EditProdActionButton.tsx";
import EditProdCategory from "@/admin/screen/category/product/edit/components/EditProdCategory.tsx";
import EditProdDesc from "@/admin/screen/category/product/edit/components/EditProdDesc.tsx";
import EditProdImg from "@/admin/screen/category/product/edit/components/EditProdImg.tsx";
import EditCatalogName from "@/admin/screen/category/product/edit/components/EditProdName.tsx";
import EditProdPrice from "@/admin/screen/category/product/edit/components/EditProdPrice.tsx";
import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import { useProductModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import { Fragment, useState } from "react";

type EditProdModalProps = {
  categoryID?: string;
  categoryName?: string;
};

function EditProdModal({ categoryID, categoryName }: EditProdModalProps) {
  const { editProduct } = useEditProductStore();
  const { editModalFlag, changeEditModalFlag } = useProductModalStateStore();

  if (!editProduct) throw new Error("product not found.");

  const [name, setName] = useState<string>(editProduct.name);
  const [category, setCategory] = useState<string>(
    categoryName ? categoryName : "",
  );
  const [categoryId, setCategoryId] = useState<string>(
    categoryID ? categoryID : "",
  );
  const [imgPath, setImgPath] = useState<string>(editProduct.imgUrl);
  const [image, setImage] = useState<string>(editProduct.imgUrl);
  const [price, setPrice] = useState<number>(editProduct.price);
  const [desc, setDesc] = useState<string>(editProduct.desc);

  return (
    <ManageEntryModal
      modalTitle={"編集モード"}
      toggleModal={editModalFlag}
      closeHandler={() => changeEditModalFlag(false)}
      parts={
        <Fragment>
          <EditCatalogName name={name} setName={setName} />
          <EditProdCategory
            category={category}
            setCategory={setCategory}
            setCategoryId={setCategoryId}
          />
          <EditProdImg
            imgPath={imgPath}
            setImgPath={setImgPath}
            image={image}
            setImage={setImage}
          />
          <EditProdPrice price={price} setPrice={setPrice} />
          <EditProdDesc desc={desc} setDesc={setDesc} />

          <EditProdActionButton
            categoryID={categoryID}
            categoryName={categoryName}
            editProduct={editProduct}
            name={name}
            desc={desc}
            price={price}
            imgPath={imgPath}
            categoryId={categoryId}
            setName={setName}
            setDesc={setDesc}
            setPrice={setPrice}
            setImgPath={setImgPath}
            setImage={setImage}
            setCategory={setCategory}
            setCategoryId={setCategoryId}
          />
        </Fragment>
      }
    />
  );
}

export default EditProdModal;
