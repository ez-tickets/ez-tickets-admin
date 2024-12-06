import InputContainer from "@/parts/InputContainer.tsx";
import InputImg from "@/parts/InputImg.tsx";
import { Fragment } from "react";

type ProdImgProps = {
  prodImgPath: string;
  setProdImgPath: (path: string) => void;
  image: string;
  setImage: (img: string) => void;
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
