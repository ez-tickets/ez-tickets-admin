import { contentsStyle } from "@/admin/components/styles/Contents.css.ts";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Contents() {
  return (
    <Fragment>
      <div className={contentsStyle.mainContainer}>
        <div className={contentsStyle.wrapper}>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}

export default Contents;
