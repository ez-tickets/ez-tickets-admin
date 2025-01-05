import { registeredCategoryStyle } from "@/admin/screen/catalog/category/components/style/RegisteredCategory.css.ts";
import { useEditCategoryStore } from "@/admin/store/RegisteredEditStore.ts";
import ListItem from "@/parts/ListItem.tsx";
import { Fragment } from "react";

type RegisteredCategoryProps = {
  id: string;
  name: string;
  setEditModal: (flag: boolean) => void;
};

function RegisteredCategory({
  id,
  name,
  setEditModal,
}: RegisteredCategoryProps) {
  const { setEditCategory } = useEditCategoryStore();

  const openEditModalHandler = (id: string, name: string) => {
    setEditCategory({ id: id, name: name });
    setEditModal(true);
  };

  return (
    <Fragment>
      <ListItem
        block={<div className={registeredCategoryStyle.category}>{name}</div>}
        executeHandler={() => openEditModalHandler(id, name)}
      />
    </Fragment>
  );
}

export default RegisteredCategory;
