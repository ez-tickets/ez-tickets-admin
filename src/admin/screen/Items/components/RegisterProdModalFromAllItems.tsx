import ProductActionButton from "@/admin/screen/category/product/register/components/ProductActionButton.tsx";
import ProductCategory from "@/admin/screen/category/product/register/components/ProductCategory.tsx";
import ProductDesc from "@/admin/screen/category/product/register/components/ProductDesc.tsx";
import ProductImg from "@/admin/screen/category/product/register/components/ProductImg.tsx";
import ProductName from "@/admin/screen/category/product/register/components/ProductName.tsx";
import ProductPrice from "@/admin/screen/category/product/register/components/ProductPrice.tsx";
import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import { useProductModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { Fragment, useState } from "react";

function RegisterProdModalFromAllItems() {
  const { registerModalFlag, changeRegisterModalFlag } =
    useProductModalStateStore();
  const [name, setName] = useState<string>("");
  const [imgPath, setImgPath] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [desc, setDesc] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const closeHandler = () => {
    setCategory("");
    setName("");
    setImgPath("");
    setImage("");
    setPrice(0);
    setDesc("");
    changeRegisterModalFlag(false);
  };

  return (
    <Fragment>
      <ManageEntryModal
        modalTitle={"新規登録"}
        toggleModal={registerModalFlag}
        closeHandler={closeHandler}
        parts={
          <Fragment>
            <ProductName name={name} setName={setName} />
            <ProductCategory category={category} setCategory={setCategory} />
            <ProductImg
              imgPath={imgPath}
              setImgPath={setImgPath}
              image={image}
              setImage={setImage}
            />
            <ProductPrice price={price} setPrice={setPrice} />
            <ProductDesc desc={desc} setDesc={setDesc} />
            <ProductActionButton
              name={name}
              desc={desc}
              price={price}
              category={category}
              imgPath={imgPath}
              setName={setName}
              setDesc={setDesc}
              setPrice={setPrice}
              setCategory={setCategory}
              setImgPath={setImgPath}
              setImage={setImage}
            />
          </Fragment>
        }
      />
    </Fragment>
  );
}

export default RegisterProdModalFromAllItems;
