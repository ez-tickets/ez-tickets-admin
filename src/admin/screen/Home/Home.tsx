import { homeStyle } from "@/admin/screen/Home/Home.css.ts";
import Item from "@/admin/screen/Home/components/Item.tsx";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <div className={homeStyle.homeContainer}>
        <div className={homeStyle.gridContainer}>
          <Item />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
