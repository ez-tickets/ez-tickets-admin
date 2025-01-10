import RegisteredCategoryList from "@/admin/screen/category/components/list/RegisteredCategoryList.tsx";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";

function Category() {
  return (
    <Fragment>
      <Header title={"登録カテゴリー"} />
      <RegisteredCategoryList />
    </Fragment>
  );
}

export default Category;
