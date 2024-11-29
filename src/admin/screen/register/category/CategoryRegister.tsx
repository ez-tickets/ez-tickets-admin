import CategoryActionButton from "@/admin/screen/register/category/components/CategoryActionButton.tsx";
import CategoryName from "@/admin/screen/register/category/components/CategoryName.tsx";
import { useCategoryRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { debug } from "@/admin/store/action/ProdRegistrationAction.ts";
import Header from "@/parts/Header.tsx";
import { Fragment, useState } from "react";

function CategoryRegister() {
  const [categoryName, setCategoryName] = useState<string>("");

  // debug用
  const { categoryRegisterDispatcher } = useCategoryRegistrationStore();

  return (
    <Fragment>
      <Header
        title={"カテゴリー登録"}
        element={
          <Fragment>
            {/* debug */}
            <button
              type={"button"}
              onClick={() => categoryRegisterDispatcher(debug())}
            >
              登録
            </button>
          </Fragment>
        }
      />
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
