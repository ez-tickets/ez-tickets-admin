import { inputContainerStyle } from "@/parts/style/InputContainer.css.ts";
import { Fragment, type JSX } from "react";

type InputTextProps = {
  label?: string;
  title: string;
  inputElement: JSX.Element;
};

function InputContainer({ label, title, inputElement }: InputTextProps) {
  return (
    <Fragment>
      <div className={inputContainerStyle.inputContainer}>
        <div className={inputContainerStyle.title}>
          <label htmlFor={label}>{title}</label>
        </div>
        {inputElement}
      </div>
    </Fragment>
  );
}

export default InputContainer;
