import InputContainer from "@/parts/InputContainer.tsx";
import InputImg from "@/parts/InputImg.tsx";

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
  );
}

export default ProdImg;
