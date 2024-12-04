import CategoryModal from "@/admin/screen/catalog/category/list/components/CategoryModal.tsx";
import { registeredCategoryStyle } from "@/admin/screen/catalog/category/list/components/style/RegisteredCategory.css.ts";
import { useEditCategoryStore } from "@/admin/store/RegisteredEditStore.ts";
import { useCategoryRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import ListItem from "@/parts/ListItem.tsx";
import { Fragment, useState } from "react";

type RegisteredCategoryProps = {
  id: string;
  category: string;
};

function RegisteredCategory({ id, category }: RegisteredCategoryProps) {
  const { categoryRegisterQuery } = useCategoryRegistrationStore();
  const { setEditCategory } = useEditCategoryStore();
  const [editModal, setEditModal] = useState<boolean>(false);

  const openEditModalHandler = (id: string) => {
    for (const category of categoryRegisterQuery.filter(
      (category) => category.id === id,
    )) {
      setEditCategory(category);
    }
    setEditModal(true);
  };

  return (
    <Fragment>
      <ListItem
        block={
          <div className={registeredCategoryStyle.category}>{category}</div>
        }
        executeHandler={() => openEditModalHandler(id)}
      />
      {editModal ? (
        <CategoryModal editModal={editModal} setEditModal={setEditModal} />
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default RegisteredCategory;
