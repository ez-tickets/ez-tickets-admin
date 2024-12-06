import ConfirmModal from "@/admin/screen/confirmModal/ConfirmModal.tsx";
import { useCategoryRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { registration } from "@/admin/store/action/CategoryRegistrationAction.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/executeButton.css.ts";
import { Fragment, useState } from "react";

type CategoryActionButtonProps = {
  categoryName: string;
  setCategoryName: (name: string) => void;
  setToggleModal: (flag: boolean) => void;
};

function CategoryActionButton({
  categoryName,
  setCategoryName,
  setToggleModal,
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
    setToggleModal(false);
  };

  return (
    <Fragment>
      <ExecuteButtonContainer
        button={
          <Fragment>
            <ExecuteButton
              name={"リセット"}
              style={executeButtonStyle.reset}
              executeHandler={() => setCategoryName("")}
            />

            <ExecuteButton
              name={"登録する"}
              style={executeButtonStyle.run}
              executeHandler={openModalHandler}
            />
          </Fragment>
        }
      />

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
