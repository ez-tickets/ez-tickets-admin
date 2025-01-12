import ProductActionButton from "@/admin/screen/category/product/register/components/ProductActionButton.tsx";
import ProductCategory from "@/admin/screen/category/product/register/components/ProductCategory.tsx";
import ProductDesc from "@/admin/screen/category/product/register/components/ProductDesc.tsx";
import ProductImg from "@/admin/screen/category/product/register/components/ProductImg.tsx";
import ProductName from "@/admin/screen/category/product/register/components/ProductName.tsx";
import ProductPrice from "@/admin/screen/category/product/register/components/ProductPrice.tsx";
import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import { Fragment, useEffect, useState } from "react";

type RegisterProdModalProps = {
  toggleModal: boolean;
  setToggleModal: (flag: boolean) => void;
  categoryName: string;
};

function RegisterProdModal({
  toggleModal,
  setToggleModal,
  categoryName,
}: RegisterProdModalProps) {
  const [category, setCategory] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [imgPath, setImgPath] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [desc, setDesc] = useState<string>("");

  useEffect(() => {
    setCategory(categoryName);
  }, [categoryName]);

  const closeHandler = () => {
    setCategory(categoryName);
    setName("");
    setImgPath("");
    setImage("");
    setPrice(0);
    setDesc("");
    setToggleModal(false);
  };

  return (
    <Fragment>
      <ManageEntryModal
        modalTitle={"新規登録"}
        toggleModal={toggleModal}
        closeHandler={closeHandler}
        parts={
          <Fragment>
            <ProductCategory category={category} setCategory={setCategory} />
            <ProductName name={name} setName={setName} />
            <ProductImg
              imgPath={imgPath}
              setImgPath={setImgPath}
              image={image}
              setImage={setImage}
            />
            <ProductPrice price={price} setPrice={setPrice} />
            <ProductDesc desc={desc} setDesc={setDesc} />

            <ProductActionButton
              categoryName={categoryName}
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
              setToggleModal={setToggleModal}
            />
          </Fragment>
        }
      />
    </Fragment>
  );
}

export default RegisterProdModal;
