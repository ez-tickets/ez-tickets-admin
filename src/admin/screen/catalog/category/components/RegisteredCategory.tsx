import { registeredCategoryStyle } from "@/admin/screen/catalog/category/components/style/RegisteredCategory.css.ts";
import { useEditCategoryStore } from "@/admin/store/RegisteredEditStore.ts";
import { useCategoryRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import ListItem from "@/parts/ListItem.tsx";
import { Fragment } from "react";

type RegisteredCategoryProps = {
  id: string;
  category: string;
  setEditModal: (flag: boolean) => void;
};

function RegisteredCategory({
  id,
  category,
  setEditModal,
}: RegisteredCategoryProps) {
  const { categoryRegisterQuery } = useCategoryRegistrationStore();
  const { setEditCategory } = useEditCategoryStore();

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
    </Fragment>
  );
}

export default RegisteredCategory;
