import { labelLinksStyle } from "@/admin/screen/Register/List/components/style/LabelLinks.css.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function LabelLinks() {
  return (
    <Fragment>
      <div className={labelLinksStyle.labelContainer}>
        <Link className={labelLinksStyle.link} to={"/admin/registerList"}>
          登録商品
        </Link>
        <Link className={labelLinksStyle.link} to={"/admin/registerList"}>
          登録カテゴリー
        </Link>
      </div>
    </Fragment>
  );
}

export default LabelLinks;
