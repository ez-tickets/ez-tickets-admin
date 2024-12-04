import { listContainerStyle } from "@/parts/style/ListContainer.css.ts";
import { Fragment, type JSX } from "react";

type ListContainerProps = {
  title: string;
  headerContainer: JSX.Element;
  lists: JSX.Element;
};

function ListContainer({ title, headerContainer, lists }: ListContainerProps) {
  return (
    <Fragment>
      <div className={listContainerStyle.container}>
        <h2 className={listContainerStyle.title}>{title}</h2>
        {headerContainer}
        {lists}
      </div>
    </Fragment>
  );
}

export default ListContainer;
