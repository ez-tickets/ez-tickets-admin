import { productRegisterStyle } from "@/admin/screen/Register/ProductRegister.css.ts";
import { Fragment } from "react";

function ProductRegister() {
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
                className={productRegisterStyle.value}
                id={"name"}
                placeholder={"登録する商品名を入力"}
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
                className={productRegisterStyle.value}
                id={"price"}
                placeholder={"登録する商品価格を入力"}
              />
            </div>
          </div>

          <button type={"button"} className={productRegisterStyle.button}>
            登録する
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductRegister;
