import { inputImgStyle } from "@/parts/style/InputImg.css.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import { Fragment } from "react";

type InputImgProps = {
  imgPath: string;
  image: string;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
};

function InputImg({ imgPath, image, setImgPath, setImage }: InputImgProps) {
  const selectImgHandler = async () => {
    const path = await open({
      multiple: false,
      directory: false,
      filters: [
        {
          name: "Image",
          extensions: ["png"],
        },
      ],
    });
    if (path) {
      setImgPath(path);
      setImage(convertFileSrc(path));
    }
  };

  return (
    <Fragment>
      <div className={inputImgStyle.inputImg}>
        <button type={"button"} onClick={selectImgHandler}>
          ファイルを選択
        </button>

        <div>
          <p>プレビュー</p>
          {imgPath !== "" ? (
            <img src={image} alt={imgPath} className={inputImgStyle.img} />
          ) : (
            <div className={inputImgStyle.img} />
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default InputImg;
