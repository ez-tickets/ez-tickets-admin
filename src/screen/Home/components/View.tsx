import Contents from "@/screen/Home/components/Contents.tsx";
import SideBar from "@/screen/Home/components/SideBar.tsx";
import { viewStyle } from "@/screen/Home/components/styles/View.css.ts";
import { Fragment } from "react";

function View() {
  return (
    <Fragment>
      <div className={viewStyle.viewContainer}>
        <SideBar />
        <Contents />
      </div>
    </Fragment>
  );
}

export default View;
