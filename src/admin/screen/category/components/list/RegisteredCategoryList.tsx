import RegisteredCategories from "@/admin/screen/category/components/list/RegisteredCategories.tsx";
import { registeredCategoryListStyle } from "@/admin/screen/category/components/list/style/RegisteredCategoryList.css.ts";
import { useCategoryModalStateStore } from "@/admin/store/ModalStateStore.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ListContainer from "@/parts/ListContainer.tsx";
import ListHeader from "@/parts/ListHeader.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment } from "react";

function RegisteredCategoryList() {
  const { changeRegisterModalFlag } = useCategoryModalStateStore();

  return (
    <Fragment>
      <ListContainer
        title={"カテゴリー"}
        buttonElement={
          <ExecuteButton
            name={"新規登録"}
            style={executeButtonStyle.default}
            executeHandler={() => changeRegisterModalFlag(true)}
          />
        }
        headerContainer={
          <ListHeader
            headers={
              <div className={registeredCategoryListStyle.name}>
                カテゴリー名
              </div>
            }
          />
        }
        lists={<RegisteredCategories />}
      />
    </Fragment>
  );
}

export default RegisteredCategoryList;
