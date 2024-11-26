import { modalStyle } from "@/admin/screen/Register/Prod/ProductRegister.css.ts";
import { prodModalStyle } from "@/admin/screen/Register/Prod/components/style/ProdModal.css.ts";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { registration } from "@/admin/store/action/ProdRegistrationAction.ts";
import { Fragment } from "react";
import Modal from "react-modal";

type ProdModalProps = {
  prodName: string;
  prodPrice: number;
  prodImgPath: string;
  setProdName: (prodName: string) => void;
  setProdPrice: (prodPrice: number) => void;
  setProdImgPath: (prodImgPath: string) => void;
  setImage: (prodImgPath: string) => void;
  modalView: boolean;
  setModalView: (flag: boolean) => void;
};

function ProdModal({
  prodName,
  prodPrice,
  prodImgPath,
  setProdName,
  setProdPrice,
  setProdImgPath,
  setImage,
  modalView,
  setModalView,
}: ProdModalProps) {
  const { prodRegisterDispatcher } = useProdRegistrationStore();

  const registrationHandler = () => {
    const prodRegisterValue = {
      name: prodName,
      price: prodPrice,
      img: prodImgPath,
    };
    prodRegisterDispatcher(registration(prodRegisterValue));

    setProdName("");
    setProdPrice(0);
    setProdImgPath("");
    setImage("");
    setModalView(false);
  };

  return (
    <Fragment>
      {/*@ts-ignore react version incompatible*/}
      <Modal isOpen={modalView} style={modalStyle}>
        <p className={prodModalStyle.text}>登録してもよろしいですか？</p>
        <div className={prodModalStyle.buttonContainer}>
          <button
            type={"button"}
            className={prodModalStyle.buttonNo}
            onClick={() => setModalView(false)}
          >
            キャンセル
          </button>
          <button
            type={"button"}
            className={prodModalStyle.buttonYes}
            onClick={registrationHandler}
          >
            はい
          </button>
        </div>
      </Modal>
    </Fragment>
  );
}

export default ProdModal;
