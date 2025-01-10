import CatalogActionButton from "@/admin/screen/category/catalog/register/components/CatalogActionButton.tsx";
import CatalogCategory from "@/admin/screen/category/catalog/register/components/CatalogCategory.tsx";
import CatalogDesc from "@/admin/screen/category/catalog/register/components/CatalogDesc.tsx";
import CatalogImg from "@/admin/screen/category/catalog/register/components/CatalogImg.tsx";
import CatalogName from "@/admin/screen/category/catalog/register/components/CatalogName.tsx";
import CatalogPrice from "@/admin/screen/category/catalog/register/components/CatalogPrice.tsx";
import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import { Fragment, useState } from "react";

type RegisterCtlgModalProps = {
  toggleModal: boolean;
  setToggleModal: (flag: boolean) => void;
};

function RegisterCtlgModal({
  toggleModal,
  setToggleModal,
}: RegisterCtlgModalProps) {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
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
            <CatalogName name={name} setName={setName} />
            <CatalogCategory category={category} setCategory={setCategory} />
            <CatalogPrice price={price} setPrice={setPrice} />
            <CatalogDesc desc={desc} setDesc={setDesc} />
            <CatalogImg
              imgPath={imgPath}
              setImgPath={setImgPath}
              image={image}
              setImage={setImage}
            />

            <CatalogActionButton
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

export default RegisterCtlgModal;
