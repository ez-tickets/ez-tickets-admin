import EditCategoryActionButton from "@/admin/screen/category/components/edit/EditCategoryActionButton.tsx";
import EditCategoryName from "@/admin/screen/category/components/edit/EditCategoryName.tsx";
import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import { useCategoryModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { useEditCategoryStore } from "@/admin/store/RegisteredEditStore.ts";
import { Fragment, useState } from "react";

function EditCategoryModal() {
  const { editCategory } = useEditCategoryStore();
  const { editModalFlag, changeEditModalFlag } = useCategoryModalStateStore();

  if (!editCategory) throw new Error("category not found.");

  const [editCategoryName, setEditCategoryName] = useState<string>(
    editCategory.name,
  );

  return (
    <Fragment>
      <ManageEntryModal
        modalTitle={"編集モード"}
        toggleModal={editModalFlag}
        closeHandler={() => changeEditModalFlag(false)}
        parts={
          <Fragment>
            <EditCategoryName
              editCategoryName={editCategoryName}
              setEditCategoryName={setEditCategoryName}
            />
            <EditCategoryActionButton
              editCategory={editCategory}
              editCategoryName={editCategoryName}
              setEditCategoryName={setEditCategoryName}
            />
          </Fragment>
        }
      />
    </Fragment>
  );
}

export default EditCategoryModal;
