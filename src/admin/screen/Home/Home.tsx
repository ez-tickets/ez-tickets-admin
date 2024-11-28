import { homeStyle } from "@/admin/screen/Home/Home.css.ts";
import Labels from "@/admin/screen/Home/components/Labels.tsx";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <div className={homeStyle.homeContainer}>
        <div className={homeStyle.gridContainer}>
          <Labels />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
