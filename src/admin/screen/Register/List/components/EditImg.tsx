import { editImgStyle } from "@/admin/screen/Register/List/components/style/EditImg.css.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import { Fragment, useEffect, useState } from "react";

type EditImageProps = {
  editImgPath: string;
  setEditImgPath: (path: string) => void;
};

function EditImg({ editImgPath, setEditImgPath }: EditImageProps) {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    setImage(convertFileSrc(editImgPath));
  }, [editImgPath]);

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
      setEditImgPath(path);
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
            {image !== "" ? (
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
