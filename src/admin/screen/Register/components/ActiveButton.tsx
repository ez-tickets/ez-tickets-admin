import { activeButtonStyle } from "@/admin/screen/Register/components/style/ActiveButton.css.ts";
import { Fragment } from "react";

type ActiveButtonProps = {
  setProdName: (name: string) => void;
  setProdPrice: (price: number) => void;
  setProdImg: (img: string) => void;
};

function ActiveButton({
  setProdName,
  setProdPrice,
  setProdImg,
}: ActiveButtonProps) {
  const registerHandler = () => {};

  const resetHandler = () => {
    setProdName("");
    setProdPrice(0);
    setProdImg("");
  };

  return (
    <Fragment>
      <div className={activeButtonStyle.buttonContainer}>
        <button
          type={"button"}
          className={activeButtonStyle.resetButton}
          onClick={resetHandler}
        >
          リセット
        </button>

        <button
          type={"button"}
          className={activeButtonStyle.registerButton}
          onClick={registerHandler}
        >
          登録する
        </button>
      </div>
    </Fragment>
  );
}

export default ActiveButton;
