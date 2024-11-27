import { productRegisterStyle } from "@/admin/screen/Register/Prod/ProductRegister.css.ts";
import ProdActiveButton from "@/admin/screen/Register/Prod/components/ProdActiveButton.tsx";
import ProdImg from "@/admin/screen/Register/Prod/components/ProdImg.tsx";
import ProdName from "@/admin/screen/Register/Prod/components/ProdName.tsx";
import ProdPrice from "@/admin/screen/Register/Prod/components/ProdPrice.tsx";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { debug } from "@/admin/store/action/ProdRegistrationAction.ts";
import { Fragment, useState } from "react";

function ProductRegister() {
  const [prodName, setProdName] = useState<string>("");
  const [prodPrice, setProdPrice] = useState<number>(0);
  const [prodImgPath, setProdImgPath] = useState<string>("");
  const [image, setImage] = useState<string>("");

  // debug用
  const { prodRegisterDispatcher } = useProdRegistrationStore();

  return (
    <Fragment>
      <div className={productRegisterStyle.productRegisterContainer}>
        <div className={productRegisterStyle.header}>
          <h1>商品登録</h1>
          {/* debug */}
          <button
            type={"button"}
            onClick={() => prodRegisterDispatcher(debug())}
          >
            登録
          </button>
        </div>

        <div>
          <ProdName prodName={prodName} setProdName={setProdName} />
          <ProdPrice prodPrice={prodPrice} setProdPrice={setProdPrice} />
          <ProdImg
            prodImgPath={prodImgPath}
            setProdImgPath={setProdImgPath}
            image={image}
            setImage={setImage}
          />

          <ProdActiveButton
            prodName={prodName}
            prodPrice={prodPrice}
            prodImgPath={prodImgPath}
            setProdName={setProdName}
            setProdPrice={setProdPrice}
            setProdImgPath={setProdImgPath}
            setImage={setImage}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default ProductRegister;
