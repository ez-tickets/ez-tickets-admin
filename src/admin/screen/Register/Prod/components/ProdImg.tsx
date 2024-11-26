import { prodImgStyle } from "@/admin/screen/Register/Prod/components/style/ProdImg.css.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import { Fragment } from "react";

type ProdImgProps = {
  prodImgPath: string;
  setProdImgPath: (prodImg: string) => void;
  image: string;
  setImage: (image: string) => void;
};

function ProdImg({
  prodImgPath,
  setProdImgPath,
  image,
  setImage,
}: ProdImgProps) {
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
      setProdImgPath(path);
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
            {image !== "" ? (
              <img src={image} alt={prodImgPath} className={prodImgStyle.img} />
            ) : (
              <div className={prodImgStyle.img} />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProdImg;
