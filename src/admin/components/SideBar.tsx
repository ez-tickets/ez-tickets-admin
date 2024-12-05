import SideBarLabel from "@/admin/components/SideBarLabel.tsx";
import { sideBarStyle } from "@/admin/components/styles/SideBar.css.ts";
import { useCategoryRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

function SideBar() {
  const { categoryRegisterQuery } = useCategoryRegistrationStore();
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className={sideBarStyle.sideContainer}>
        <div className={sideBarStyle.wrapper}>
          <div className={sideBarStyle.home}>
            <Link to="/admin">
              <h3>Home</h3>
            </Link>
          </div>

          <div className={sideBarStyle.contentsContainer}>
            <SideBarLabel
              title={"登録商品"}
              element={
                <Fragment>
                  <Link to={"productRegister"}>商品登録</Link>
                  <Link to={"registeredProd"}>登録詳細</Link>
                </Fragment>
              }
              addButton={false}
            />

            <SideBarLabel
              title={"カタログ"}
              element={
                <Fragment>
                  <Link to={"registeredCategory"}>カテゴリー管理</Link>
                  {categoryRegisterQuery.map((category) => (
                    <Link
                      to="registeredCatalog"
                      key={category.id}
                      state={{ title: category.category }}
                    >
                      {category.category}
                    </Link>
                  ))}
                </Fragment>
              }
              addButton={true}
              executeHandler={() => navigate("categoryRegister")}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar;
