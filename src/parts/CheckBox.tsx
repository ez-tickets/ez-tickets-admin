import { Fragment } from "react";
import { checkBoxStyle } from "@/parts/style/CheckBox.css.ts";
import { IconSquare, IconSquareCheck } from "@tabler/icons-react";

type CheckBoxProps = {
  check: boolean;
  executeHandler: (flag: boolean) => void;
};

function CheckBox({ check, executeHandler }: CheckBoxProps) {
  return (
    <Fragment>
      <div className={checkBoxStyle.container}>
        <p>販売する場合はチェックしてください</p>
        <div className={checkBoxStyle.checkBox}>
          {check ? (
            <IconSquareCheck
              className={checkBoxStyle.sell}
              onClick={() => executeHandler(!check)}
            />
          ) : (
            <IconSquare
              className={checkBoxStyle.notSell}
              onClick={() => executeHandler(!check)}
            />
          )}

          <span>
            {check ? (
              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <div
                className={checkBoxStyle.textSell}
                onClick={() => executeHandler(!check)}
              >
                販売する
              </div>
            ) : (
              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <div
                className={checkBoxStyle.textNotSell}
                onClick={() => executeHandler(!check)}
              >
                休止する
              </div>
            )}
          </span>
        </div>
      </div>
    </Fragment>
  );
}

export default CheckBox;
