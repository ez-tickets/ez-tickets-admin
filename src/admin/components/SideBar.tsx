import SideBarLabel from "@/admin/components/SideBarLabel.tsx";
import { sideBarStyle } from "@/admin/components/styles/SideBar.css.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function SideBar() {
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
                  <Link to={"categoryRegister"}>カテゴリー登録</Link>
                  <Link to={"registerList"}>登録詳細</Link>
                </Fragment>
              }
              addButton={false}
            />

            <SideBarLabel
              title={"カタログ管理"}
              element={
                <Fragment>
                  <Link to={"productList"}>カタログ作成</Link>
                  <Link to={"#"}>カタログ詳細</Link>
                </Fragment>
              }
              addButton={true}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar;
