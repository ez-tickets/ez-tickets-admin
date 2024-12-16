import RegisteredProductList from "@/admin/screen/product/components/RegisteredProductList.tsx";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";

function RegisteredProd() {
  return (
    <Fragment>
      <Header title={"登録商品"} />
      <RegisteredProductList />
    </Fragment>
  );
}

export default RegisteredProd;
