import { labelsStyle } from "@/admin/screen/product/list/components/style/Labels.css.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Labels() {
  return (
    <Fragment>
      <div className={labelsStyle.labelContainer}>
        <Link to={"#"}>ソート項目</Link>
      </div>
    </Fragment>
  );
}

export default Labels;
