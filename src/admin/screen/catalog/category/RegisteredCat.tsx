import RegisteredCategoryList from "@/admin/screen/catalog/category/components/RegisteredCategoryList.tsx";
import { useCategoryRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { debug } from "@/admin/store/action/CategoryRegistrationAction.ts";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";

function RegisteredCat() {
  const { categoryRegisterDispatcher } = useCategoryRegistrationStore();

  return (
    <Fragment>
      <Header
        title={"登録カテゴリー"}
        element={
          <button
            style={{ border: "1px solid lightgray", borderRadius: "5px" }}
            type={"button"}
            onClick={() => categoryRegisterDispatcher(debug())}
          >
            debug
          </button>
        }
      />
      <RegisteredCategoryList />
    </Fragment>
  );
}

export default RegisteredCat;
