import { labelsStyle } from "@/admin/screen/register/list/components/style/Labels.css.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Labels() {
  return (
    <Fragment>
      <div className={labelsStyle.labelContainer}>
        <Link to={"/admin/registerList"}>商品登録</Link>
        <Link to={"/admin/registerList/registeredCategoryList"}>商品登録</Link>
      </div>
    </Fragment>
  );
}

export default Labels;