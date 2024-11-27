import { editImgStyle } from "@/admin/screen/Register/List/components/style/EditImg.css.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import { Fragment } from "react";

type EditImageProps = {
  editImgPath: string;
  setEditImgPath: (path: string) => void;
  image: string;
  setImage: (image: string) => void;
};

function EditImg({
  editImgPath,
  setEditImgPath,
  image,
  setImage,
}: EditImageProps) {
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
      setEditImgPath(path);
      setImage(convertFileSrc(path));
    }
  };

  return (
    <Fragment>
      <div className={editImgStyle.inputContainer}>
        <div className={editImgStyle.title}>
          <p>画像</p>
        </div>
        <div className={editImgStyle.inputImg}>
          <button
            type={"button"}
            className={editImgStyle.imgChooseButton}
            onClick={selectImgHandler}
          >
            choose file
          </button>
          <div>
            <p className={editImgStyle.imgText}>プレビュー</p>
            {editImgPath !== "" ? (
              <img src={image} alt={editImgPath} className={editImgStyle.img} />
            ) : (
              <div className={editImgStyle.img} />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditImg;
