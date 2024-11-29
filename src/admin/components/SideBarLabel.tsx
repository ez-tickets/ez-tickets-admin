import { Fragment, type JSX } from "react";

type SideBarLabelProps = {
  title: string;
  element: JSX.Element;
};

function SideBarLabel({ title, element }: SideBarLabelProps) {
  return (
    <Fragment>
      <details>
        <summary>{title}</summary>
        <div>{element}</div>
      </details>
    </Fragment>
  );
}

export default SideBarLabel;
