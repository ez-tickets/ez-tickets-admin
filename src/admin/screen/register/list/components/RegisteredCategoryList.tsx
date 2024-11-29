import RegisteredCategories from "@/admin/screen/register/list/components/RegisteredCategories.tsx";
import { registeredCategoryListStyle } from "@/admin/screen/register/list/components/style/RegisteredCategoryList.css.ts";
import ListContainer from "@/parts/ListContainer.tsx";
import ListHeader from "@/parts/ListHeader.tsx";
import { Fragment } from "react";

function RegisteredCategoryList() {
  return (
    <Fragment>
      <ListContainer
        title={"登録カテゴリー"}
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
