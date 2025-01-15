import { textAreaStyle } from "@/parts/style/TextArea.css.ts";
import { Fragment } from "react";

type TextAreaProps = {
  guide: string;
  label: string;
  value: string;
  executeHandler: (input: string) => void;
};

const TextArea = ({ guide, label, value, executeHandler }: TextAreaProps) => {
  return (
    <Fragment>
      <div className={textAreaStyle.textArea}>
        <p>
          {guide}
          <span>(必須)</span>
        </p>
        <textarea
          id={label}
          className={textAreaStyle.value}
          value={value}
          onChange={(e) => executeHandler(e.target.value)}
        />
      </div>
    </Fragment>
  );
};

export default TextArea;
