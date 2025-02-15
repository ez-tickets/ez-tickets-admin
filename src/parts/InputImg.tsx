import { inputImgStyle } from "@/parts/style/InputImg.css.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import { Fragment } from "react";

type InputImgProps = {
  imgPath: string; //画像パス
  image: string; //画像url
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
  required?: boolean;
};

function InputImg({
  imgPath,
  image,
  setImgPath,
  setImage,
  required,
}: InputImgProps) {
  const selectImgHandler = async () => {
    const path = await open({
      multiple: false,
      directory: false,
      filters: [
        {
          name: "Image",
          extensions: ["png", "jpeg"],
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
        <div className={inputImgStyle.selectContainer}>
          <span>{required ? "(必須)" : ""}</span>
          <button type={"button"} onClick={selectImgHandler}>
            ファイル選択
          </button>
        </div>

        <div className={inputImgStyle.imgContainer}>
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
