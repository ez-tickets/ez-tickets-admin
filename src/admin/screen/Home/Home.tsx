import { homeStyle } from "@/admin/screen/Home/Home.css.ts";
import { IconCategory } from "@tabler/icons-react";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <div className={homeStyle.homeContainer}>
        <div className={homeStyle.gridContainer}>
          <div className={homeStyle.item}>
            <p className={homeStyle.itemTitle}>商品管理</p>
            <IconCategory
              className={homeStyle.itemIcon}
              stroke={2}
              color={"#818181"}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
