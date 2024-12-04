import Labels from "@/admin/screen/product/list/components/Labels.tsx";
import RegisteredProductList from "@/admin/screen/product/list/components/RegisteredProductList.tsx";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";

function RegisteredProd() {
  return (
    <Fragment>
      <Header title={"登録商品"} element={<Labels />} />
      <RegisteredProductList />
    </Fragment>
  );
}

export default RegisteredProd;
