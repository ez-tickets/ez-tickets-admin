import EditCategoryActionButton from "@/admin/screen/category/components/edit/EditCategoryActionButton.tsx";
import EditCategoryName from "@/admin/screen/category/components/edit/EditCategoryName.tsx";
import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import { useEditCategoryStore } from "@/admin/store/RegisteredEditStore.ts";
import { Fragment, useState } from "react";

type CategoryModalProps = {
  editModal: boolean;
  setEditModal: (flag: boolean) => void;
};

function EditCategoryModal({ editModal, setEditModal }: CategoryModalProps) {
  const { editCategory, resetEditCategory } = useEditCategoryStore();
  if (!editCategory) throw new Error("category not found.");

  const [editCategoryName, setEditCategoryName] = useState<string>(
    editCategory.name,
  );

  const closeHandler = () => {
    setEditModal(false);
    resetEditCategory();
  };

  return (
    <Fragment>
      <ManageEntryModal
        modalTitle={"編集モード"}
        toggleModal={editModal}
        closeHandler={closeHandler}
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
              setEditModal={setEditModal}
            />
          </Fragment>
        }
      />
    </Fragment>
  );
}

export default EditCategoryModal;
