import ConfirmModal from "@/admin/screen/confirmModal/ConfirmModal.tsx";
import { useCategoryRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import {
  deleteCategory,
  replaceEditCategory,
} from "@/admin/store/action/CategoryRegistrationAction.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/executeButton.css.ts";
import type { RegisterCategory } from "@/types.ts";
import { Fragment, useState } from "react";

type CategoryEditActionButtonProps = {
  editCategory: RegisterCategory;
  editCategorise: string;
  setEditCategorise: (category: string) => void;
  setEditModal: (flag: boolean) => void;
};

function CategoryEditActionButton({
  editCategory,
  editCategorise,
  setEditCategorise,
  setEditModal,
}: CategoryEditActionButtonProps) {
  const { categoryRegisterDispatcher } = useCategoryRegistrationStore();
  const [modalView, setModalView] = useState<boolean>(false);
  const [taskType, setTaskType] = useState<string>("");
  const [executeHandler, setExecuteHandler] = useState<() => void>();

  const resetHandler = () => {
    setEditCategorise(editCategory.category);
  };

  const updateHandler = () => {
    const editedCategory = {
      id: editCategory.id,
      category: editCategorise,
    };
    categoryRegisterDispatcher(replaceEditCategory(editedCategory));
  };

  const deleteHandler = () => {
    categoryRegisterDispatcher(deleteCategory(editCategory.id));
  };

  const openModalHandler = (type: string) => {
    if (editCategorise !== "") {
      switch (type) {
        case confirmAction.UPDATE:
          setTaskType(confirmAction.UPDATE);
          setExecuteHandler(() => updateHandler);
          break;
        case confirmAction.DELETE:
          setTaskType(confirmAction.DELETE);
          setExecuteHandler(() => deleteHandler);
          break;
      }
      setModalView(true);
    }
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

export default CategoryEditActionButton;
