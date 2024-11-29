import EditModal from "@/admin/screen/editModal/EditModal.tsx";
import CategoryEditActionButton from "@/admin/screen/register/list/registryCategory/components/CategoryEditActionButton.tsx";
import EditCategory from "@/admin/screen/register/list/registryCategory/components/EditCategory.tsx";
import { useEditCategoryStore } from "@/admin/store/RegisteredEditStore.ts";
import { Fragment, useState } from "react";

type CategoryModalProps = {
  editModal: boolean;
  setEditModal: (flag: boolean) => void;
};

function CategoryModal({ editModal, setEditModal }: CategoryModalProps) {
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
      <EditModal
        editModal={editModal}
        setEditModal={setEditModal}
        closeHandler={closeHandler}
        editParts={
          <Fragment>
            <EditCategory
              editCategorise={editCategorise}
              setEditCategorise={setEditCategorise}
            />
            <CategoryEditActionButton
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

export default CategoryModal;
