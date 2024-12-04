import RegisteredCategoryList from "@/admin/screen/catalog/category/list/components/RegisteredCategoryList.tsx";
import Labels from "@/admin/screen/product/list/components/Labels.tsx";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";

function RegisteredCat() {
  return (
    <Fragment>
      <Header title={"登録カテゴリー"} element={<Labels />} />
      <RegisteredCategoryList />
    </Fragment>
  );
}

export default RegisteredCat;
