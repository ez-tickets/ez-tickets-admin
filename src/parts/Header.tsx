import { headerStyle } from "@/parts/style/Header.css.ts";
import { Fragment, type JSX } from "react";

type HeaderProps = {
  title: string;
  element?: JSX.Element;
};

function Header({ title, element }: HeaderProps) {
  return (
    <Fragment>
      <div className={headerStyle.header}>
        <h1>{title}</h1>
        {element}
      </div>
    </Fragment>
  );
}

export default Header;
