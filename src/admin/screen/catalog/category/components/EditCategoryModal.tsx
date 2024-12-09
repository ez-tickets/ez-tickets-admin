import EditCategoryActionButton from "@/admin/screen/catalog/category/components/EditCategoryActionButton.tsx";
import EditCategoryName from "@/admin/screen/catalog/category/components/EditCategoryName.tsx";
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

  const [editCategorise, setEditCategorise] = useState<string>(
    editCategory.category,
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
              editCategorise={editCategorise}
              setEditCategorise={setEditCategorise}
            />
            <EditCategoryActionButton
              editCategory={editCategory}
              editCategorise={editCategorise}
              setEditCategorise={setEditCategorise}
              setEditModal={setEditModal}
            />
          </Fragment>
        }
      />
    </Fragment>
  );
}

export default EditCategoryModal;
