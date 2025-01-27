import RegisteredCategory from "@/admin/screen/category/components/list/RegisteredCategory.tsx";
import { type Category, fetchCategories } from "@/cmds/categories.ts";
import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Fragment, useState } from "react";
import {useQuery} from "@tanstack/react-query";

type RegisteredCategoriesProps = {
  setEditModal: (flag: boolean) => void;
};

function RegisteredCategories({ setEditModal }: RegisteredCategoriesProps) {
  const { isLoading, error, data } =  useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) return (<div>Loading...</div>);

  const [categories, setCategories] = useState<Category[]>(data!);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;
    if (!data) return;

    if (active.id !== over.id) {
      const oldIndex = data.findIndex((v) => v.id === active.id);
      const newIndex = data.findIndex((v) => v.id === over.id);
      const updatedCategories = arrayMove(data, oldIndex, newIndex);
      setCategories(updatedCategories);
      //todo 並べ替え後のデータをサーバーに送る処理 --> {id, order}
    }
  };

  return (
    <Fragment>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={categories}
          strategy={verticalListSortingStrategy}
        >
          {categories.map((category) => (
            <RegisteredCategory
              key={category.id}
              id={category.id}
              name={category.name}
              setEditModal={setEditModal}
            />
          ))}
        </SortableContext>
      </DndContext>
    </Fragment>
  );
}

export default RegisteredCategories;
