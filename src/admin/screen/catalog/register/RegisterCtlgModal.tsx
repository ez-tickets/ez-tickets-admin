import CatalogActionButton from "@/admin/screen/catalog/register/components/CatalogActionButton.tsx";
import CatalogDesc from "@/admin/screen/catalog/register/components/CatalogDesc.tsx";
import CatalogImg from "@/admin/screen/catalog/register/components/CatalogImg.tsx";
import CatalogMain from "@/admin/screen/catalog/register/components/CatalogMain.tsx";
import CatalogName from "@/admin/screen/catalog/register/components/CatalogName.tsx";
import CatalogPrice from "@/admin/screen/catalog/register/components/CatalogPrice.tsx";
import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import type { RegisterItem } from "@/types.ts";
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
  const [desc, setDesc] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [imgPath, setImgPath] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [main, setMain] = useState<RegisterItem>({ id: "", name: "" });

  return (
    <Fragment>
      <ManageEntryModal
        modalTitle={"新規登録"}
        toggleModal={toggleModal}
        closeHandler={() => setToggleModal(false)}
        parts={
          <Fragment>
            <CatalogName name={name} setName={setName} />
            <CatalogDesc desc={desc} setDesc={setDesc} />
            <CatalogPrice price={price} setPrice={setPrice} />
            <CatalogImg
              imgPath={imgPath}
              setImgPath={setImgPath}
              image={image}
              setImage={setImage}
            />
            <CatalogMain
              main={main}
              setMain={setMain}
              setImgPath={setImgPath}
            />

            <CatalogActionButton
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
            />
          </Fragment>
        }
      />
    </Fragment>
  );
}

export default RegisterCtlgModal;
