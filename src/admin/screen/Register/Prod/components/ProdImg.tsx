import { prodImgStyle } from "@/admin/screen/Register/Prod/components/style/ProdImg.css.ts";
import { open } from "@tauri-apps/plugin-dialog";
import { Fragment } from "react";

type ProdImgProps = {
  prodImg: string;
  setProdImg: (prodImg: string) => void;
};

function ProdImg({ prodImg, setProdImg }: ProdImgProps) {
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
    path && setProdImg(path);
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
            <img src={prodImg} alt={prodImg} className={prodImgStyle.img} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProdImg;
