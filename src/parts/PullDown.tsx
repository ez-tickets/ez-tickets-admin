import { pullDownStyle } from "@/parts/style/PullDown.css.ts";
import { Fragment, type JSX } from "react";

type PullDownProps = {
  label: string;
  guide: string;
  value: string;
  required?: boolean;
  options: JSX.Element;
  executeHandler: (value: string) => void;
};

function PullDown({
  label,
  guide,
  value,
  required,
  options,
  executeHandler,
}: PullDownProps) {
  return (
    <Fragment>
      <div className={pullDownStyle.selectBox}>
        <p>
          {guide}
          <span>{required && "(必須)"}</span>
        </p>

        <select
          value={value}
          id={label}
          onChange={(e) => executeHandler(e.target.value)}
        >
          <option value="" selected>
            選択してください
          </option>
          {options}
        </select>
      </div>
    </Fragment>
  );
}

export default PullDown;
