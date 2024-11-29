import CategoryActionButton from "@/admin/screen/register/category/components/CategoryActionButton.tsx";
import CategoryName from "@/admin/screen/register/category/components/CategoryName.tsx";
import Header from "@/parts/Header.tsx";
import { Fragment, useState } from "react";

function CategoryRegister() {
  const [categoryName, setCategoryName] = useState<string>("");

  return (
    <Fragment>
      <Header title={"カテゴリー登録"} />
      <CategoryName
        categoryName={categoryName}
        setCategoryName={setCategoryName}
      />
      <CategoryActionButton
        categoryName={categoryName}
        setCategoryName={setCategoryName}
      />
    </Fragment>
  );
}

export default CategoryRegister;
