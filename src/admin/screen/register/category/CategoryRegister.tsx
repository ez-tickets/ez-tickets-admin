import { categoryRegisterStyle } from "@/admin/screen/register/category/CategoryRegister.css.ts";
import CategoryActionButton from "@/admin/screen/register/category/components/CategoryActionButton.tsx";
import CategoryName from "@/admin/screen/register/category/components/CategoryName.tsx";
import Header from "@/components/Header.tsx";
import { Fragment, useState } from "react";

function CategoryRegister() {
  const [categoryName, setCategoryName] = useState<string>("");

  return (
    <Fragment>
      <div className={categoryRegisterStyle.categoryRegisterContainer}>
        <Header title={"カテゴリー登録"} />
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
