import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { registerCategory } from "@/cmds/categories.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";

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
  const [modalView, setModalView] = useState<boolean>(false);

  const openModalHandler = () => {
    if (categoryName === "") {
      toast.error("必須項目を入力してください");
      return;
    }
    setModalView(true);
  };

  const executeHandler = async () => {
    await registerCategory({ name: categoryName });

    setCategoryName("");
    setToggleModal(false);
    toast.success(
      <Fragment>
        カテゴリ「{categoryName}」が
        <br />
        正常に登録されました！
      </Fragment>,
    );
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
