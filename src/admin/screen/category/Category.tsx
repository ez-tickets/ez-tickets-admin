import RegisteredCategoryList from "@/admin/screen/category/components/list/RegisteredCategoryList.tsx";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";

function Category() {
  return (
    <Fragment>
      <Header title={"カテゴリー詳細"} />
      <RegisteredCategoryList />
    </Fragment>
  );
}

export default Category;
