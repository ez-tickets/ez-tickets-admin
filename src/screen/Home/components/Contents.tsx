import { contentsStyle } from "@/screen/Home/components/styles/Contents.css.ts";
import { Fragment } from "react";

function Contents() {
  return (
    <Fragment>
      <div className={contentsStyle.mainContainer}>
        <h3>main</h3>
      </div>
    </Fragment>
  );
}

export default Contents;
