import { listHeaderStyle } from "@/parts/style/ListHeader.css.ts";
import { Fragment, type JSX } from "react";

type ListHeaderProps = {
  headers: JSX.Element;
};

function ListHeader({ headers }: ListHeaderProps) {
  return (
    <Fragment>
      <div className={listHeaderStyle.header}>{headers}</div>
    </Fragment>
  );
}

export default ListHeader;
