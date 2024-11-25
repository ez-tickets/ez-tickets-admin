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
            <details className={sideBarStyle.details}>
              <summary className={sideBarStyle.summary}>登録管理</summary>
              <ul>
                <Link to={"productRegister"}>
                  <li className={sideBarStyle.li}>商品登録</li>
                </Link>
                <Link to={"categoryRegister"}>
                  <li className={sideBarStyle.li}>カテゴリー登録</li>
                </Link>
                <Link to={"registerList"}>
                  <li className={sideBarStyle.li}>登録詳細</li>
                </Link>
              </ul>
            </details>

            <details className={sideBarStyle.details}>
              <summary className={sideBarStyle.summary}>メニュー管理</summary>
              <ul>
                <Link to={"productList"}>
                  <li className={sideBarStyle.li}>メニュー作成</li>
                </Link>
                <Link to={"#"}>
                  <li className={sideBarStyle.li}>メニュー詳細</li>
                </Link>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar;
