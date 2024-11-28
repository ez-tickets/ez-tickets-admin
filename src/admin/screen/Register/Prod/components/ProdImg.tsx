import InputContainer from "@/admin/components/InputContainer.tsx";
import InputImg from "@/admin/components/InputImg.tsx";
import { Fragment } from "react";

type ProdImgProps = {
  prodImgPath: string;
  setProdImgPath: (prodImg: string) => void;
  image: string;
  setImage: (image: string) => void;
};

function ProdImg({
  prodImgPath,
  setProdImgPath,
  image,
  setImage,
}: ProdImgProps) {
  return (
    <Fragment>
      <InputContainer
        title={"画像"}
        inputElement={
          <InputImg
            imgPath={prodImgPath}
            setImgPath={setProdImgPath}
            image={image}
            setImage={setImage}
          />
        }
      />
    </Fragment>
  );
}

export default ProdImg;
