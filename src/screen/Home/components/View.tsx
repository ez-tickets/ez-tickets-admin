import { viewStyle } from "@/screen/Home/components/styles/View.css.ts";
import { Fragment } from "react";
import SideBar from "@/screen/Home/components/SideBar.tsx";
import Contents from "@/screen/Home/components/Contents.tsx";

function View() {
  return (
    <Fragment>
      <div className={viewStyle.viewContainer}>
        <SideBar/>
        <Contents />
      </div>
    </Fragment>
  );
}

export default View;
