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
import { Fragment, useEffect, useState } from "react";

type RegisteredCategoriesProps = {
  setEditModal: (flag: boolean) => void;
};

function RegisteredCategories({ setEditModal }: RegisteredCategoriesProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    (async () => {
      const categories = await fetchCategories();
      categories.sort((a, b) => a.order - b.order);
      setCategories(categories);
    })();
  }, [categories]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = categories.findIndex((v) => v.id === active.id);
      const newIndex = categories.findIndex((v) => v.id === over.id);
      const updatedCategories = arrayMove(categories, oldIndex, newIndex);
      setCategories(updatedCategories);
      //todo 並べ替え後のデータをサーバーに送る処理 --> categories
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
