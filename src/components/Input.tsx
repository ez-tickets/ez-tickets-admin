import { inputStyle } from "@/components/style/input.css.ts";
import { Fragment } from "react";

type InputProps = {
  guide: string;
  type: string;
  label: string;
  value: string | number;
  executeHandler: (input: string) => void;
};

function Input({ guide, type, label, value, executeHandler }: InputProps) {
  return (
    <Fragment>
      <div className={inputStyle.input}>
        <p>{guide}</p>
        <input
          type={type}
          id={label}
          value={value}
          onChange={(e) => executeHandler(e.target.value)}
        />
      </div>
    </Fragment>
  );
}

export default Input;
