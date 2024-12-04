import { inputStyle } from "@/parts/style/input.css.ts";
import { Fragment } from "react";

type InputProps = {
  guide: string;
  type: string;
  label: string;
  required?: boolean;
  value: string | number;
  executeHandler: (input: string) => void;
};

function Input({
  guide,
  type,
  label,
  required,
  value,
  executeHandler,
}: InputProps) {
  return (
    <Fragment>
      <div className={inputStyle.input}>
        <p>
          {guide}
          <span>{required && "(必須)"}</span>
        </p>
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
