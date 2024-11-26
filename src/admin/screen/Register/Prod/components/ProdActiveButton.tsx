import ProdModal from "@/admin/screen/Register/Prod/components/ProdModal.tsx";
import { prodActiveButtonStyle } from "@/admin/screen/Register/Prod/components/style/ProdActiveButton.css.ts";
import { Fragment, useState } from "react";

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
  const [modalView, setModalView] = useState<boolean>(false);

  const resetHandler = () => {
    setProdName("");
    setProdPrice(0);
    setProdImgPath("");
    setImage("");
  };

  const openModalHandler = () => {
    if (prodName !== "" && prodPrice >= 0 && prodImgPath !== "") {
      setModalView(true);
    }
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
          onClick={openModalHandler}
        >
          登録する
        </button>
      </div>

      <ProdModal
        prodName={prodName}
        prodPrice={prodPrice}
        prodImgPath={prodImgPath}
        setProdName={setProdName}
        setProdPrice={setProdPrice}
        setProdImgPath={setProdImgPath}
        setImage={setImage}
        modalView={modalView}
        setModalView={setModalView}
      />
    </Fragment>
  );
}

export default ProdActiveButton;
