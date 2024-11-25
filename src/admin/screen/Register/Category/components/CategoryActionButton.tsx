import { categoryActionButtonStyle } from "@/admin/screen/Register/Category/components/style/CategoryActionButton.css.ts";
import { useCategoryRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { registration } from "@/admin/store/action/CategoryRegistrationAction.ts";
import { Fragment } from "react";

type CategoryActionButtonProps = {
  categoryName: string;
  setCategoryName: (categoryName: string) => void;
};

function CategoryActionButton({
  categoryName,
  setCategoryName,
}: CategoryActionButtonProps) {
  const { categoryRegisterDispatcher } = useCategoryRegistrationStore();
  const registerHandler = () => {
    const categoryRegisterValue = { category: categoryName };
    categoryRegisterDispatcher(registration(categoryRegisterValue));
    setCategoryName("");
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
          onClick={registerHandler}
        >
          登録する
        </button>
      </div>
    </Fragment>
  );
}

export default CategoryActionButton;
