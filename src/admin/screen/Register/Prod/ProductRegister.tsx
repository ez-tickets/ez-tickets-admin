import { productRegisterStyle } from "@/admin/screen/Register/Prod/ProductRegister.css.ts";
import ActiveButton from "@/admin/screen/Register/Prod/components/ActiveButton.tsx";
import ProdImg from "@/admin/screen/Register/Prod/components/ProdImg.tsx";
import ProdName from "@/admin/screen/Register/Prod/components/ProdName.tsx";
import ProdPrice from "@/admin/screen/Register/Prod/components/ProdPrice.tsx";
import { Fragment, useState } from "react";

function ProductRegister() {
  const [prodName, setProdName] = useState<string>("");
  const [prodPrice, setProdPrice] = useState<number>(0);
  const [prodImg, setProdImg] = useState<string>("");

  return (
    <Fragment>
      <div className={productRegisterStyle.productRegisterContainer}>
        <div className={productRegisterStyle.header}>
          <h1>商品登録</h1>
        </div>

        <div>
          <ProdName prodName={prodName} setProdName={setProdName} />
          <ProdPrice prodPrice={prodPrice} setProdPrice={setProdPrice} />
          <ProdImg prodImg={prodImg} setProdImg={setProdImg} />

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
