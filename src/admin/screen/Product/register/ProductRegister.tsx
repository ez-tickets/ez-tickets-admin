import ProdActiveButton from "@/admin/screen/product/register/components/ProdActiveButton.tsx";
import ProdImg from "@/admin/screen/product/register/components/ProdImg.tsx";
import ProdName from "@/admin/screen/product/register/components/ProdName.tsx";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { debug } from "@/admin/store/action/ProdRegistrationAction.ts";
import Header from "@/parts/Header.tsx";
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
      <Header
        title={"商品登録"}
        element={
          <Fragment>
            {/* debug */}
            <button
              type={"button"}
              onClick={() => prodRegisterDispatcher(debug())}
            >
              登録
            </button>
          </Fragment>
        }
      />

      <ProdName prodName={prodName} setProdName={setProdName} />
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
    </Fragment>
  );
}

export default ProductRegister;
