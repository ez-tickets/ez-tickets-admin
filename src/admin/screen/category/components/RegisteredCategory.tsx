import { registeredCategoryStyle } from "@/admin/screen/category/components/style/RegisteredCategory.css.ts";
import { useEditCategoryStore } from "@/admin/store/RegisteredEditStore.ts";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
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

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

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
        onClick={() => openEditModalHandler(id, name)}
      >
        <span
          className={registeredCategoryStyle.congruent}
          {...listeners}
          {...attributes}
        >
          ≡
        </span>
        <span>{name}</span>
      </div>
    </Fragment>
  );
}

export default RegisteredCategory;
