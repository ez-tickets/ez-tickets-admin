import { itemStyle } from "@/admin/screen/home/components/style/Item.css.ts";
import { Fragment, type JSX } from "react";
import { Link } from "react-router-dom";

type LabelProps = {
  path: string;
  labelName: string;
  icon: JSX.Element;
};

function Item({ path, labelName, icon }: LabelProps) {
  return (
    <Fragment>
      <Link to={path}>
        <div className={itemStyle.item}>
          <p>{labelName}</p>
          {icon}
        </div>
      </Link>
    </Fragment>
  );
}

export default Item;
