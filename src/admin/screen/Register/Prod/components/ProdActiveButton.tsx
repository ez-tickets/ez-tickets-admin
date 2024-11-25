import { prodActiveButtonStyle } from "@/admin/screen/Register/Prod/components/style/ProdActiveButton.css.ts";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { registration } from "@/admin/store/action/ProdRegistrationAction.ts";
import { Fragment } from "react";

type ProdActiveButtonProps = {
  prodName: string;
  prodPrice: number;
  prodImg: string;
  setProdName: (name: string) => void;
  setProdPrice: (price: number) => void;
  setProdImg: (img: string) => void;
};

function ProdActiveButton({
  prodName,
  prodPrice,
  prodImg,
  setProdName,
  setProdPrice,
  setProdImg,
}: ProdActiveButtonProps) {
  const { prodRegisterDispatcher } = useProdRegistrationStore();

  const registerHandler = () => {
    if (prodName !== "" && prodPrice >= 0) {
      const prodRegisterValue = {
        name: prodName,
        price: prodPrice,
        img: prodImg,
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
      <div className={prodActiveButtonStyle.buttonContainer}>
        <button
          type={"button"}
          className={prodActiveButtonStyle.resetButton}
          onClick={resetHandler}
        >
          リセット
        </button>

        <button
          type={"button"}
          className={prodActiveButtonStyle.registerButton}
          onClick={registerHandler}
        >
          登録する
        </button>
      </div>
    </Fragment>
  );
}

export default ProdActiveButton;
