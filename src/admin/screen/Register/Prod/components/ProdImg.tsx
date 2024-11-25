import { prodImgStyle } from "@/admin/screen/Register/Prod/components/style/ProdImg.css.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import {Fragment, useState} from "react";

type ProdImgProps = {
  prodImg: string;
  setProdImg: (prodImg: string) => void;
};

function ProdImg({ prodImg, setProdImg }: ProdImgProps) {
  const [image, setImage] = useState<string>();
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
      setProdImg(path);
      setImage(convertFileSrc(path));
    }
  };

  return (
    <Fragment>
      <div className={prodImgStyle.inputContainer}>
        <div className={prodImgStyle.title}>
          <p>画像</p>
        </div>
        <div className={prodImgStyle.inputImg}>
          <button
            type={"button"}
            className={prodImgStyle.imgChooseButton}
            onClick={selectImgHandler}
          >
            choose file
          </button>
          <div>
            <p className={prodImgStyle.imgText}>プレビュー</p>
            <img
              src={image}
              alt={prodImg}
              className={prodImgStyle.img}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProdImg;
