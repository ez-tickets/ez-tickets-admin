import InputContainer from "@/parts/InputContainer.tsx";
import InputImg from "@/parts/InputImg.tsx";
import { Fragment } from "react";

type EditImageProps = {
  editImgPath: string;
  setEditImgPath: (path: string) => void;
  image: string;
  setImage: (img: string) => void;
};

function EditProdImg({
  editImgPath,
  setEditImgPath,
  image,
  setImage,
}: EditImageProps) {
  return (
    <Fragment>
      <InputContainer
        title={"画像"}
        inputElement={
          <InputImg
            imgPath={editImgPath}
            setImgPath={setEditImgPath}
            image={image}
            setImage={setImage}
            required={true}
          />
        }
      />
    </Fragment>
  );
}

export default EditProdImg;
