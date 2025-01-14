import { contentStyle } from "@/admin/screen/home/components/style/content.css.ts";
import { Fragment, type JSX } from "react";
import { Link } from "react-router-dom";

type LabelProps = {
  path: string;
  labelName: string;
  icon: JSX.Element;
};

function Content({ path, labelName, icon }: LabelProps) {
  return (
    <Fragment>
      <Link to={path}>
        <div className={contentStyle.item}>
          <p>{labelName}</p>
          {icon}
        </div>
      </Link>
    </Fragment>
  );
}

export default Content;
