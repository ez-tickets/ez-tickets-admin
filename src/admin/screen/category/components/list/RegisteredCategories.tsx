import RegisteredCategory from "@/admin/screen/category/components/list/RegisteredCategory.tsx";
import { useCategoryModalStateStore } from "@/admin/store/ModalStateStore.ts";
import {
  type OrderedCategory,
  fetchCategories,
  reorderCategories,
} from "@/cmds/categories.ts";
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
import { useQuery } from "@tanstack/react-query";
import { Fragment, useEffect, useState } from "react";

function RegisteredCategories() {
  const { registerModalFlag, editModalFlag } = useCategoryModalStateStore();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) return <div>Loading...</div>;

  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const [categories, setCategories] = useState<OrderedCategory[]>(data!);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;
    if (!data) return;

    if (active.id !== over.id) {
      const oldIndex = data.findIndex((v) => v.id === active.id);
      const newIndex = data.findIndex((v) => v.id === over.id);

      const updatedCategories = arrayMove(data, oldIndex, newIndex);
      const reOrdered: OrderedCategory[] = [];
      updatedCategories.forEach((category, index) => {
        category.ordering = index;
        reOrdered.push(category);
      });

      await reorderCategories(reOrdered);
      await refetch();

      setCategories(reOrdered);
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
          {data?.map((category) => (
            <RegisteredCategory
              key={category.id}
              id={category.id}
              name={category.name}
            />
          ))}
        </SortableContext>
      </DndContext>
    </Fragment>
  );
}

export default RegisteredCategories;
