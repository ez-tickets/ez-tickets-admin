import InputContainer from "@/parts/InputContainer.tsx";
import InputImg from "@/parts/InputImg.tsx";
import { Fragment } from "react";

type EditProdImgProps = {
  imgPath: string;
  image: string;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
};

function EditProdImg({
  imgPath,
  image,
  setImgPath,
  setImage,
}: EditProdImgProps) {
  return (
    <Fragment>
      <InputContainer
        title={"画像"}
        inputElement={
          <InputImg
            imgPath={imgPath}
            image={image}
            setImgPath={setImgPath}
            setImage={setImage}
            required={true}
          />
        }
      />
    </Fragment>
  );
}

export default EditProdImg;
