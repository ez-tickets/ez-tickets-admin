import { viewStyle } from "@/screen/Home/components/styles/View.css.ts";
import { Fragment } from "react";

function View() {
  return (
    <Fragment>
      <div className={viewStyle.viewContainer}>
        <div className={viewStyle.sideContainer}>
          {" "}
          {/* sideBar */}
          <h3>side</h3>
        </div>

        <div className={viewStyle.mainContainer}>
          {" "}
          {/* contentView */}
          <h3>main</h3>
        </div>
      </div>
    </Fragment>
  );
}

export default View;
