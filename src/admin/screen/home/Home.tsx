import { homeStyle } from "@/admin/screen/home/Home.css.ts";
import Contents from "@/admin/screen/home/components/contents.tsx";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <div className={homeStyle.homeContainer}>
        <div className={homeStyle.gridContainer}>
          <Contents />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
