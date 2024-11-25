import { itemStyle } from "@/admin/screen/Home/components/style/Item.css.ts";
import { IconBox, IconToolsKitchen2 } from "@tabler/icons-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Item() {
  return (
    <Fragment>
      <Link to={"registerList"}>
        <div className={itemStyle.item}>
          <p className={itemStyle.itemTitle}>登録管理</p>
          <IconBox
            className={itemStyle.itemIcon}
            stroke={2}
            color={"#818181"}
            width={100}
            height={100}
          />
        </div>
      </Link>

      <Link to={"productList"}>
        <div className={itemStyle.item}>
          <p className={itemStyle.itemTitle}>メニュー管理</p>
          <IconToolsKitchen2
            className={itemStyle.itemIcon}
            stroke={2}
            color={"#818181"}
            width={100}
            height={100}
          />
        </div>
      </Link>
    </Fragment>
  );
}

export default Item;
