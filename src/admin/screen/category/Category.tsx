import EditCategoryModal from "@/admin/screen/category/components/edit/EditCategoryModal.tsx";
import RegisteredCategoryList from "@/admin/screen/category/components/list/RegisteredCategoryList.tsx";
import { useCategoryModalStateStore } from "@/admin/store/ModalStateStore.ts";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";

function Category() {
  const { editModalFlag } = useCategoryModalStateStore();

  return (
    <Fragment>
      <Header title={"カテゴリー詳細"} />
      <RegisteredCategoryList />
      {editModalFlag ? <EditCategoryModal /> : ""}
    </Fragment>
  );
}

export default Category;
