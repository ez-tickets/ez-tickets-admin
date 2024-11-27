import ConfirmModal from "@/admin/screen/ConfirmModal/ConfirmModal.tsx";
import { categoryActionButtonStyle } from "@/admin/screen/Register/Category/components/style/CategoryActionButton.css.ts";
import { useCategoryRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { registration } from "@/admin/store/action/CategoryRegistrationAction.ts";
import { confirmAction } from "@/mockData.ts";
import { Fragment, useState } from "react";

type CategoryActionButtonProps = {
  categoryName: string;
  setCategoryName: (categoryName: string) => void;
};

function CategoryActionButton({
  categoryName,
  setCategoryName,
}: CategoryActionButtonProps) {
  const { categoryRegisterDispatcher } = useCategoryRegistrationStore();
  const [modalView, setModalView] = useState<boolean>(false);

  const openModalHandler = () => {
    if (categoryName !== "") {
      setModalView(true);
    }
  };

  const executeHandler = () => {
    const categoryRegisterValue = { category: categoryName };
    categoryRegisterDispatcher(registration(categoryRegisterValue));

    setCategoryName("");
    setModalView(false);
  };

  return (
    <Fragment>
      <div className={categoryActionButtonStyle.buttonContainer}>
        <button
          type={"button"}
          className={categoryActionButtonStyle.resetButton}
          onClick={() => setCategoryName("")}
        >
          リセット
        </button>

        <button
          type={"button"}
          className={categoryActionButtonStyle.registerButton}
          onClick={openModalHandler}
        >
          登録する
        </button>
      </div>

      <ConfirmModal
        taskType={confirmAction.REGISTRATION}
        executeHandler={executeHandler}
        modalView={modalView}
        setModalView={setModalView}
      />
    </Fragment>
  );
}

export default CategoryActionButton;
