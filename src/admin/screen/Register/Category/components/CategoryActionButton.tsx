import CategoryModal from "@/admin/screen/Register/Category/components/CategoryModal.tsx";
import { categoryActionButtonStyle } from "@/admin/screen/Register/Category/components/style/CategoryActionButton.css.ts";
import { Fragment, useState } from "react";

type CategoryActionButtonProps = {
  categoryName: string;
  setCategoryName: (categoryName: string) => void;
};

function CategoryActionButton({
  categoryName,
  setCategoryName,
}: CategoryActionButtonProps) {
  const [modalView, setModalView] = useState<boolean>(false);

  const openModalHandler = () => {
    if (categoryName !== "") {
      setModalView(true);
    }
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

      <CategoryModal
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        modalView={modalView}
        setModalView={setModalView}
      />
    </Fragment>
  );
}

export default CategoryActionButton;
