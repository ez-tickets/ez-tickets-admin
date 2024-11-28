import { labelStyle } from "@/admin/screen/Home/components/style/Label.css.ts";
import { Fragment, type JSX } from "react";
import { Link } from "react-router-dom";

type LabelProps = {
  path: string;
  labelName: string;
  icon: JSX.Element;
};

function Label({ path, labelName, icon }: LabelProps) {
  return (
    <Fragment>
      <Link to={path}>
        <div className={labelStyle.label}>
          <p className={labelStyle.labelTitle}>{labelName}</p>
          {icon}
        </div>
      </Link>
    </Fragment>
  );
}

export default Label;
