import { executeButtonContainerStyle } from "@/parts/style/ExecuteButtonContainer.css.ts";
import { Fragment, type JSX } from "react";

type ExecuteButtonProps = {
  button: JSX.Element;
};

function ExecuteButtonContainer({ button }: ExecuteButtonProps) {
  return (
    <Fragment>
      <div className={executeButtonContainerStyle.container}>{button}</div>
    </Fragment>
  );
}

export default ExecuteButtonContainer;
