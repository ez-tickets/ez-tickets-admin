import { listItemStyle } from "@/parts/style/ListItem.css.ts";
import { Fragment, type JSX } from "react";

type ListItemProps = {
  block: JSX.Element;
  executeHandler: () => void;
};

function ListItem({ block, executeHandler }: ListItemProps) {
  return (
    <Fragment>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className={listItemStyle.item} onClick={executeHandler}>
        {block}
      </div>
    </Fragment>
  );
}

export default ListItem;
