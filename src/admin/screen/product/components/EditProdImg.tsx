import InputContainer from "@/parts/InputContainer.tsx";
import InputImg from "@/parts/InputImg.tsx";

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
  );
}

export default EditProdImg;
