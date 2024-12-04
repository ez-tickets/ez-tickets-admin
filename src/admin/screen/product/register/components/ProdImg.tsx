import InputContainer from "@/parts/InputContainer.tsx";
import InputImg from "@/parts/InputImg.tsx";
import { Fragment } from "react";

type ProdImgProps = {
  prodImgPath: string;
  setProdImgPath: (prodImg: string) => void;
  image: string;
  setImage: (image: string) => void;
  required?: boolean;
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
            required={true}
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
