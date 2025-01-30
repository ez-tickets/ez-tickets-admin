import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { useCategoryModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { type CreateCategory, registerCategory } from "@/cmds/categories.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";

type CategoryActionButtonProps = {
  categoryName: string;
  setCategoryName: (name: string) => void;
};

function CategoryActionButton({
  categoryName,
  setCategoryName,
}: CategoryActionButtonProps) {
  const { changeRegisterModalFlag } = useCategoryModalStateStore();
  const [confirmModalView, setConfirmModalView] = useState<boolean>(false);

  const openConfirmModalHandler = () => {
    if (categoryName === "") {
      toast.error("必須項目を入力してください");
      return;
    }
    setConfirmModalView(true);
  };

  const handler = async () => {
    await registerCategoryHandler.mutateAsync({ name: categoryName });
  };

  const client = useQueryClient();
  const registerCategoryHandler = useMutation({
    mutationFn: async (create: CreateCategory) =>
      await registerCategory(create),
    onSuccess: async (_, variables) => {
      setCategoryName("");
      changeRegisterModalFlag(false);
      toast.success(
        <Fragment>
          カテゴリ「{variables.name}」が
          <br />
          正常に登録されました！
        </Fragment>,
      );
    },
    onSettled: async () => {
      await client.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });

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
              executeHandler={openConfirmModalHandler}
            />
          </Fragment>
        }
      />

      <ConfirmModal
        taskType={confirmAction.REGISTRATION}
        executeHandler={handler}
        confirmModalView={confirmModalView}
        setConfirmModalView={setConfirmModalView}
      />
    </Fragment>
  );
}

export default CategoryActionButton;
