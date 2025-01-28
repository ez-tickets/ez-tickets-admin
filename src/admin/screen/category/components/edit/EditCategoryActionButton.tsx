import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { useCategoryModalStateStore } from "@/admin/store/ModalStateStore.ts";
import {
  type UpdateCategory,
  deleteCategory,
  updateCategoryName,
} from "@/cmds/categories.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import type { ReNameCategory } from "@/types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";

type CategoryEditActionButtonProps = {
  editCategory: ReNameCategory;
  editCategoryName: string;
  setEditCategoryName: (name: string) => void;
};

function EditCategoryActionButton({
  editCategory,
  editCategoryName,
  setEditCategoryName,
}: CategoryEditActionButtonProps) {
  const { changeEditModalFlag } = useCategoryModalStateStore();
  const [confirmModalView, setConfirmModalView] = useState<boolean>(false);
  const [taskType, setTaskType] = useState<string>("");
  const [executeHandler, setExecuteHandler] = useState<() => void>();

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
    setConfirmModalView(true);
  };

  const updateHandler = async () => {
    await updateExecHandler.mutateAsync({
      id: editCategory.id,
      ctx: { name: editCategoryName },
    });
  };

  const deleteHandler = async () => {
    await deleteExecHandler.mutateAsync(editCategory.id);
  };

  const client = useQueryClient();
  const updateExecHandler = useMutation({
    mutationFn: async (update: UpdateCategory) =>
      await updateCategoryName(update),
    onSuccess: (_, update) => {
      toast.success(
        <Fragment>
          カテゴリ「{update.ctx.name}」へ
          <br />
          正常に更新しました！
        </Fragment>,
      );
      changeEditModalFlag(false);
    },
    onSettled: async () => {
      await client.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });

  const deleteExecHandler = useMutation({
    mutationFn: async (id: string) => await deleteCategory(id),
    onSuccess: () => {
      toast.success(
        <Fragment>
          カテゴリ「{editCategory.name}」を
          <br />
          正常に削除しました！
        </Fragment>,
      );
      changeEditModalFlag(false);
    },
    onSettled: async () => {
      await client.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });

  const resetHandler = () => {
    setEditCategoryName(editCategory.name);
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
        confirmModalView={confirmModalView}
        setConfirmModalView={setConfirmModalView}
      />
    </Fragment>
  );
}

export default EditCategoryActionButton;
