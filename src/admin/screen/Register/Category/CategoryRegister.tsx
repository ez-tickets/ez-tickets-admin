import { categoryRegisterStyle } from "@/admin/screen/Register/Category/CategoryRegister.css.ts";
import CategoryActionButton from "@/admin/screen/Register/Category/components/CategoryActionButton.tsx";
import CategoryName from "@/admin/screen/Register/Category/components/CategoryName.tsx";
import { Fragment, useState } from "react";

function CategoryRegister() {
  const [categoryName, setCategoryName] = useState<string>("");

  return (
    <Fragment>
      <div className={categoryRegisterStyle.categoryRegisterContainer}>
        <div className={categoryRegisterStyle.header}>
          <h1>カテゴリー登録</h1>
        </div>

        <CategoryName
          categoryName={categoryName}
          setCategoryName={setCategoryName}
        />
        <CategoryActionButton
          categoryName={categoryName}
          setCategoryName={setCategoryName}
        />
      </div>
    </Fragment>
  );
}

export default CategoryRegister;
