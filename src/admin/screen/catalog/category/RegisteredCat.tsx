import RegisteredCategoryList from "@/admin/screen/catalog/category/components/RegisteredCategoryList.tsx";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";

function RegisteredCat() {
  return (
    <Fragment>
      <Header title={"登録カテゴリー"} />
      <RegisteredCategoryList />
    </Fragment>
  );
}

export default RegisteredCat;
