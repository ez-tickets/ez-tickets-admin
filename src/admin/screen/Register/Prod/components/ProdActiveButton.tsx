import { prodActiveButtonStyle } from "@/admin/screen/Register/Prod/components/style/ProdActiveButton.css.ts";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { registration } from "@/admin/store/action/ProdRegistrationAction.ts";
import { Fragment } from "react";
// import { message } from "@tauri-apps/plugin-dialog";

type ProdActiveButtonProps = {
  prodName: string;
  prodPrice: number;
  prodImgPath: string;
  setProdName: (name: string) => void;
  setProdPrice: (price: number) => void;
  setProdImgPath: (img: string) => void;
  setImage: (img: string) => void;
};

function ProdActiveButton({
  prodName,
  prodPrice,
  prodImgPath,
  setProdName,
  setProdPrice,
  setProdImgPath,
  setImage,
}: ProdActiveButtonProps) {
  const { prodRegisterDispatcher } = useProdRegistrationStore();

  const registerHandler = async () => {
    if (prodName !== "" && prodPrice >= 0 && prodImgPath !== "") {
      const prodRegisterValue = {
        name: prodName,
        price: prodPrice,
        img: prodImgPath,
      };
      prodRegisterDispatcher(registration(prodRegisterValue));
      // await message("登録完了しました！", { title: "通知", kind: "info", });

      setProdName("");
      setProdPrice(0);
      setProdImgPath("");
      setImage("");
    }
  };

  const resetHandler = () => {
    setProdName("");
    setProdPrice(0);
    setProdImgPath("");
    setImage("");
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
