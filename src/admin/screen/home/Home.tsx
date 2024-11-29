import { homeStyle } from "@/admin/screen/home/Home.css.ts";
import Items from "@/admin/screen/home/components/Items.tsx";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <div className={homeStyle.homeContainer}>
        <div className={homeStyle.gridContainer}>
          <Items />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
