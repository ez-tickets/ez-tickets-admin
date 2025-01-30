import { registeredCategoryStyle } from "@/admin/screen/category/components/list/style/RegisteredCategory.css.ts";
import { useCategoryModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { useEditCategoryStore } from "@/admin/store/RegisteredEditStore.ts";
import type { Category } from "@/cmds/categories.ts";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Fragment } from "react";

type RegisteredCategoryProps = {
  category: Category;
};

function RegisteredCategory({ category }: RegisteredCategoryProps) {
  const { setEditCategory } = useEditCategoryStore();
  const { changeEditModalFlag } = useCategoryModalStateStore();

  const openEditModalHandler = () => {
    setEditCategory({ id: category.id, name: category.name });
    changeEditModalFlag(true);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: category.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Fragment>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={registeredCategoryStyle.list}
        style={style}
        ref={setNodeRef}
        onClick={openEditModalHandler}
      >
        <span
          className={registeredCategoryStyle.congruent}
          {...listeners}
          {...attributes}
        >
          ≡
        </span>
        <span>{category.name}</span>
      </div>
    </Fragment>
  );
}

export default RegisteredCategory;
