import RegisteredCategories from "@/admin/screen/Register/List/components/RegisteredCategories.tsx";
import { registeredCategoryListStyle } from "@/admin/screen/Register/List/components/style/RegisteredCategoryList.css.ts";
import { Fragment } from "react";

function RegisteredCategoryList() {
  return (
    <Fragment>
      <div className={registeredCategoryListStyle.listContainer}>
        <h2 className={registeredCategoryListStyle.listTitle}>
          登録カテゴリー
        </h2>
        <div className={registeredCategoryListStyle.listHeader}>
          <div className={registeredCategoryListStyle.headerName}>
            カテゴリー名
          </div>
        </div>

        <RegisteredCategories />
      </div>
    </Fragment>
  );
}

export default RegisteredCategoryList;
