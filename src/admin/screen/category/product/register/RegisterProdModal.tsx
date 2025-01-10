import ProductActionButton from "@/admin/screen/category/product/register/components/ProductActionButton.tsx";
import ProductCategory from "@/admin/screen/category/product/register/components/ProductCategory.tsx";
import ProductDesc from "@/admin/screen/category/product/register/components/ProductDesc.tsx";
import ProductImg from "@/admin/screen/category/product/register/components/ProductImg.tsx";
import ProductName from "@/admin/screen/category/product/register/components/ProductName.tsx";
import ProductPrice from "@/admin/screen/category/product/register/components/ProductPrice.tsx";
import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import { Fragment, useState } from "react";

type RegisterProdModalProps = {
  toggleModal: boolean;
  setToggleModal: (flag: boolean) => void;
};

function RegisterProdModal({
  toggleModal,
  setToggleModal,
}: RegisterProdModalProps) {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string | null>("");
  const [desc, setDesc] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [imgPath, setImgPath] = useState<string>("");
  const [image, setImage] = useState<string>("");

  return (
    <Fragment>
      <ManageEntryModal
        modalTitle={"新規登録"}
        toggleModal={toggleModal}
        closeHandler={() => setToggleModal(false)}
        parts={
          <Fragment>
            <ProductName name={name} setName={setName} />
            <ProductCategory category={category} setCategory={setCategory} />
            <ProductPrice price={price} setPrice={setPrice} />
            <ProductDesc desc={desc} setDesc={setDesc} />
            <ProductImg
              imgPath={imgPath}
              setImgPath={setImgPath}
              image={image}
              setImage={setImage}
            />

            <ProductActionButton
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
