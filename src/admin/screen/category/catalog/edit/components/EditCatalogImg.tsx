import InputContainer from "@/parts/InputContainer.tsx";
import InputImg from "@/parts/InputImg.tsx";
import { Fragment } from "react";

type EditCatalogImgProps = {
  imgPath: string;
  image: string;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
};

function EditCatalogImg({
  imgPath,
  image,
  setImgPath,
  setImage,
}: EditCatalogImgProps) {
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

export default EditCatalogImg;
