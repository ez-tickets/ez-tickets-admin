import { listContainerStyle } from "@/parts/style/ListContainer.css.ts";
import { Fragment, type JSX } from "react";

type ListContainerProps = {
  title: string;
  buttonElement?: JSX.Element;
  headerContainer: JSX.Element;
  lists: JSX.Element;
};

function ListContainer({
  title,
  buttonElement,
  headerContainer,
  lists,
}: ListContainerProps) {
  return (
    <Fragment>
      <div className={listContainerStyle.container}>
        <div className={listContainerStyle.topContainer}>
          <h2 className={listContainerStyle.title}>{title}</h2>
          <div>{buttonElement}</div>
        </div>
        {headerContainer}
        {lists}
      </div>
    </Fragment>
  );
}

export default ListContainer;
