import { Fragment } from "react";

type ExecuteButtonProps = {
  name: string;
  style: string;
  executeHandler: () => void;
};

function ExecuteButton({ name, style, executeHandler }: ExecuteButtonProps) {
  return (
    <Fragment>
      <button type={"button"} className={style} onClick={executeHandler}>
        {name}
      </button>
    </Fragment>
  );
}

export default ExecuteButton;
