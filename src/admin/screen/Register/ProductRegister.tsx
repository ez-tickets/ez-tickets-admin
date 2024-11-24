import { productRegisterStyle } from "@/admin/screen/Register/ProductRegister.css.ts";
import ActiveButton from "@/admin/screen/Register/components/ActiveButton.tsx";
import { type ChangeEvent, Fragment, useState } from "react";

function ProductRegister() {
  const [prodName, setProdName] = useState<string>("");
  const [prodPrice, setProdPrice] = useState<number>(0);
  const [prodImg, setProdImg] = useState<string>("");

  const inputNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProdName(e.target.value);
  };

  const inputPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
    if (isNaN(value) || value < 0) return;
    setProdPrice(value);
  };

  const selectImgHandler = () => {
    // open().then(files => setProdImg(files));
  };

  return (
    <Fragment>
      <div className={productRegisterStyle.productRegisterContainer}>
        <div className={productRegisterStyle.header}>
          <h1>商品登録</h1>
        </div>

        <div>
          <div className={productRegisterStyle.inputContainer}>
            <div className={productRegisterStyle.title}>
              <label htmlFor="name">商品名</label>
            </div>
            <div className={productRegisterStyle.input}>
              <input
                type={"text"}
                id={"name"}
                value={prodName}
                className={productRegisterStyle.value}
                placeholder={"登録する商品名を入力"}
                onChange={(e) => inputNameHandler(e)}
              />
            </div>
          </div>

          <div className={productRegisterStyle.inputContainer}>
            <div className={productRegisterStyle.title}>
              <label htmlFor="price">価格</label>
            </div>
            <div className={productRegisterStyle.input}>
              <input
                type={"text"}
                id={"price"}
                value={prodPrice}
                className={productRegisterStyle.value}
                onChange={(e) => inputPriceHandler(e)}
              />
            </div>
          </div>

          <div className={productRegisterStyle.inputContainer}>
            <div className={productRegisterStyle.title}>
              <p>画像</p>
            </div>
            <div className={productRegisterStyle.inputImg}>
              <button
                type={"button"}
                className={productRegisterStyle.imgChooseButton}
                onClick={selectImgHandler}
              >
                choose file
              </button>
              <div>
                <p className={productRegisterStyle.imgText}>プレビュー</p>
                <img
                  src={prodImg}
                  alt={prodImg}
                  className={productRegisterStyle.img}
                />
              </div>
            </div>
          </div>

          <ActiveButton
            prodName={prodName}
            prodPrice={prodPrice}
            prodImg={prodImg}
            setProdName={setProdName}
            setProdPrice={setProdPrice}
            setProdImg={setProdImg}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default ProductRegister;
