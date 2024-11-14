import { Fragment } from "react";
import { Link } from "react-router-dom";
import { sideBarStyle } from "@/screen/Home/components/styles/SideBar.css.ts";

function SideBar() {
  return (
    <Fragment>
      <div className={sideBarStyle.sideContainer}>
        <div className={sideBarStyle.wrapper}>

          <div className={sideBarStyle.home}>
            <Link to={"#"}>
              <h3>Home</h3>
            </Link>
          </div>

          <div className={sideBarStyle.contentsContainer}>
            <details className={sideBarStyle.details}>
              <summary className={sideBarStyle.summary}>商品管理</summary>
              <ul>
                <Link to={"#"}>
                  <li className={sideBarStyle.li}>一覧</li>
                </Link>
                <Link to={"#"}>
                  <li className={sideBarStyle.li}>追加</li>
                </Link>
                <Link to={"#"}>
                  <li className={sideBarStyle.li}>編集</li>
                </Link>
                <Link to={"#"}>
                  <li className={sideBarStyle.li}>削除</li>
                </Link>
              </ul>
            </details>

            <details className={sideBarStyle.details}>
              <summary className={sideBarStyle.summary}>カテゴリー管理</summary>
              <ul>
                <Link to={"#"}>
                  <li className={sideBarStyle.li}>一覧</li>
                </Link>
                <Link to={"#"}>
                  <li className={sideBarStyle.li}>追加</li>
                </Link>
                <Link to={"#"}>
                  <li className={sideBarStyle.li}>編集</li>
                </Link>
                <Link to={"#"}>
                  <li className={sideBarStyle.li}>削除</li>
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
