import CatalogActionButton from "@/admin/screen/catalog/register/components/CatalogActionButton.tsx";
import CatalogDesc from "@/admin/screen/catalog/register/components/CatalogDesc.tsx";
import CatalogImg from "@/admin/screen/catalog/register/components/CatalogImg.tsx";
import CatalogMain from "@/admin/screen/catalog/register/components/CatalogMain.tsx";
import CatalogName from "@/admin/screen/catalog/register/components/CatalogName.tsx";
import CatalogOption from "@/admin/screen/catalog/register/components/CatalogOption.tsx";
import CatalogPrice from "@/admin/screen/catalog/register/components/CatalogPrice.tsx";
import CatalogSub from "@/admin/screen/catalog/register/components/CatalogSub.tsx";
import { registerCtlgModalStyle } from "@/admin/screen/catalog/register/components/style/RegisterCtlgModal.css.ts";
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
  const [main, setMain] = useState<RegisterItem[]>([]);
  const [sub, setSub] = useState<RegisterItem[]>([]);
  const [options, setOptions] = useState<RegisterItem[]>([]);
  const [item, setItem] = useState<boolean>(false);

  return (
    <Fragment>
      <ManageEntryModal
        modalTitle={"新規登録"}
        headerElement={
          <div className={registerCtlgModalStyle.buttonContainer}>
            <button
              type={"button"}
              className={registerCtlgModalStyle.button}
              onClick={() => setItem(false)}
            >
              単品
            </button>
            <button
              type={"button"}
              className={registerCtlgModalStyle.button}
              onClick={() => setItem(true)}
            >
              セット
            </button>
          </div>
        }
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
            <CatalogMain main={main} setMain={setMain} />
            {item ? <CatalogSub sub={sub} setSub={setSub} /> : ""}
            <CatalogOption options={options} setOptions={setOptions} />

            <CatalogActionButton
              name={name}
              desc={desc}
              price={price}
              imgPath={imgPath}
              image={image}
              main={main}
              sub={sub}
              options={options}
              setName={setName}
              setDesc={setDesc}
              setPrice={setPrice}
              setImgPath={setImgPath}
              setImage={setImage}
              setMain={setMain}
              setSub={setSub}
              setOptions={setOptions}
            />
          </Fragment>
        }
      />
    </Fragment>
  );
}

export default RegisterCtlgModal;
