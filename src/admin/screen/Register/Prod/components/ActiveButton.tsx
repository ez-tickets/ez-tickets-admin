import { activeButtonStyle } from "@/admin/screen/Register/Prod/components/style/ActiveButton.css.ts";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { registration } from "@/admin/store/action/ProdRegistrationAction.ts";
import { Fragment } from "react";

type ActiveButtonProps = {
  prodName: string;
  prodPrice: number;
  prodImg: string;
  setProdName: (name: string) => void;
  setProdPrice: (price: number) => void;
  setProdImg: (img: string) => void;
};

function ActiveButton({
  prodName,
  prodPrice,
  // prodImg,
  setProdName,
  setProdPrice,
  setProdImg,
}: ActiveButtonProps) {
  const { prodRegisterDispatcher } = useProdRegistrationStore();

  const registerHandler = () => {
    if (prodName !== "" && prodPrice >= 0) {
      const prodRegisterValue = {
        name: prodName,
        price: prodPrice,
      };
      prodRegisterDispatcher(registration(prodRegisterValue));
    }

    setProdName("");
    setProdPrice(0);
    setProdImg("");
  };

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
