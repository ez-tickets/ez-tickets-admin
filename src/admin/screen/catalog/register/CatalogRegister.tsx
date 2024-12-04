import CatalogActionButton from "@/admin/screen/catalog/register/components/CatalogActionButton.tsx";
import CatalogDesc from "@/admin/screen/catalog/register/components/CatalogDesc.tsx";
import CatalogImg from "@/admin/screen/catalog/register/components/CatalogImg.tsx";
import CatalogMain from "@/admin/screen/catalog/register/components/CatalogMain.tsx";
import CatalogName from "@/admin/screen/catalog/register/components/CatalogName.tsx";
import CatalogOption from "@/admin/screen/catalog/register/components/CatalogOption.tsx";
import CatalogPrice from "@/admin/screen/catalog/register/components/CatalogPrice.tsx";
import CatalogSub from "@/admin/screen/catalog/register/components/CatalogSub.tsx";
import Header from "@/parts/Header.tsx";
import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";

type State = {
  title: string;
};

function CatalogRegister() {
  const { title } = useLocation().state as State;

  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [imgPath, setImgPath] = useState<string>("");
  const [image, setImage] = useState<string>("");

  return (
    <Fragment>
      <Header title={title} />
      <CatalogName name={name} setName={setName} />
      <CatalogDesc desc={desc} setDesc={setDesc} />
      <CatalogPrice price={price} setPrice={setPrice} />
      <CatalogImg
        imgPath={imgPath}
        setImgPath={setImgPath}
        image={image}
        setImage={setImage}
      />
      <CatalogMain />
      <CatalogSub />
      <CatalogOption />

      <CatalogActionButton />
    </Fragment>
  );
}

export default CatalogRegister;
