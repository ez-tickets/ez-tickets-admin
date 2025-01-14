import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { deleteCategory, updateCategoryName } from "@/cmds/categories.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import type { ReNameCategory } from "@/types.ts";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";

type CategoryEditActionButtonProps = {
  editCategory: ReNameCategory;
  editCategoryName: string;
  setEditCategoryName: (name: string) => void;
  setEditModal: (flag: boolean) => void;
};

function EditCategoryActionButton({
  editCategory,
  editCategoryName,
  setEditCategoryName,
  setEditModal,
}: CategoryEditActionButtonProps) {
  const [modalView, setModalView] = useState<boolean>(false);
  const [taskType, setTaskType] = useState<string>("");
  const [executeHandler, setExecuteHandler] = useState<() => void>();

  const resetHandler = () => {
    setEditCategoryName(editCategory.name);
  };

  const updateHandler = async () => {
    await updateCategoryName(editCategory.id, { name: editCategoryName });
    toast.success(
      <Fragment>
        カテゴリ「{editCategoryName}」へ
        <br />
        正常に更新しました！
      </Fragment>,
    );
  };

  const deleteHandler = async () => {
    await deleteCategory(editCategory.id);
    toast.success(
      <Fragment>
        カテゴリ「{editCategory.name}」を
        <br />
        正常に削除しました！
      </Fragment>,
    );
  };

  const openModalHandler = (type: string) => {
    switch (type) {
      case confirmAction.UPDATE:
        if (editCategoryName === "") {
          toast.error("必須項目を入力してください");
          return;
        }
        setTaskType(confirmAction.UPDATE);
        setExecuteHandler(() => updateHandler);
        break;
      case confirmAction.DELETE:
        setTaskType(confirmAction.DELETE);
        setExecuteHandler(() => deleteHandler);
        break;
    }
    setModalView(true);
  };

  return (
    <Fragment>
      <ExecuteButtonContainer
        button={
          <Fragment>
            <ExecuteButton
              name={"リセット"}
              style={executeButtonStyle.editModalReset}
              executeHandler={resetHandler}
            />
            <ExecuteButton
              name={"更新する"}
              style={executeButtonStyle.editModalUpdate}
              executeHandler={() => openModalHandler(confirmAction.UPDATE)}
            />
            <ExecuteButton
              name={"削除する"}
              style={executeButtonStyle.editModalDelete}
              executeHandler={() => openModalHandler(confirmAction.DELETE)}
            />
          </Fragment>
        }
      />

      <ConfirmModal
        taskType={taskType}
        executeHandler={executeHandler}
        modalView={modalView}
        setModalView={setModalView}
        setEditModal={setEditModal}
      />
    </Fragment>
  );
}

export default EditCategoryActionButton;
