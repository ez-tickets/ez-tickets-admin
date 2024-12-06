import RegisteredProductList from "@/admin/screen/product/components/RegisteredProductList.tsx";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { debug } from "@/admin/store/action/ProdRegistrationAction.ts";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";

function RegisteredProd() {
  const { prodRegisterDispatcher } = useProdRegistrationStore();

  return (
    <Fragment>
      <Header
        title={"登録商品"}
        element={
          <button
            style={{ border: "1px solid lightgray", borderRadius: "5px" }}
            type={"button"}
            onClick={() => prodRegisterDispatcher(debug())}
          >
            debug
          </button>
        }
      />
      <RegisteredProductList />
    </Fragment>
  );
}

export default RegisteredProd;
