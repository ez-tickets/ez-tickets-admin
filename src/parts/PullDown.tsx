import { pullDownStyle } from "@/parts/style/PullDown.css.ts";
import { Fragment, type JSX } from "react";

type PullDownProps = {
  label: string;
  guide: string;
  required?: boolean;
  options: JSX.Element;
};

function PullDown({ label, guide, required, options }: PullDownProps) {
  return (
    <Fragment>
      <div className={pullDownStyle.selectBox}>
        <p>
          {guide}
          <span>{required && "(必須)"}</span>
        </p>

        <select id={label}>
          <option value="default">選択してください</option>
          {options}
        </select>
      </div>
    </Fragment>
  );
}

export default PullDown;
