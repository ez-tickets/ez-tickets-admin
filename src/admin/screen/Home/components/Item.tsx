import { itemStyle } from "@/admin/screen/Home/components/style/Item.css.ts";
import { IconCategory } from "@tabler/icons-react";
import { Fragment } from "react";

function Item() {
  return (
    <Fragment>
      <div className={itemStyle.item}>
        <p className={itemStyle.itemTitle}>商品管理</p>
        <IconCategory
          className={itemStyle.itemIcon}
          stroke={2}
          color={"#818181"}
          width={100}
          height={100}
        />
      </div>
    </Fragment>
  );
}

export default Item;
