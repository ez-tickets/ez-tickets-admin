import { categoryModalStyle } from "@/admin/screen/Register/Category/components/style/CategoryModal.css.ts";
import { registerModalStyle } from "@/admin/screen/Register/Prod/ProductRegister.css.ts";
import { useCategoryRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { registration } from "@/admin/store/action/CategoryRegistrationAction.ts";
import { Fragment } from "react";
import Modal from "react-modal";

type CategoryModalProps = {
  categoryName: string;
  setCategoryName: (name: string) => void;
  modalView: boolean;
  setModalView: (flag: boolean) => void;
};

function CategoryModal({
  categoryName,
  setCategoryName,
  modalView,
  setModalView,
}: CategoryModalProps) {
  const { categoryRegisterDispatcher } = useCategoryRegistrationStore();

  const registrationHandler = () => {
    const categoryRegisterValue = { category: categoryName };
    categoryRegisterDispatcher(registration(categoryRegisterValue));

    setCategoryName("");
    setModalView(false);
  };

  return (
    <Fragment>
      {/*@ts-ignore react version incompatible*/}
      <Modal isOpen={modalView} style={registerModalStyle}>
        <p className={categoryModalStyle.text}>登録してもよろしいですか？</p>
        <div className={categoryModalStyle.buttonContainer}>
          <button
            type={"button"}
            className={categoryModalStyle.buttonNo}
            onClick={() => setModalView(false)}
          >
            キャンセル
          </button>
          <button
            type={"button"}
            className={categoryModalStyle.buttonYes}
            onClick={registrationHandler}
          >
            はい
          </button>
        </div>
      </Modal>
    </Fragment>
  );
}

export default CategoryModal;
