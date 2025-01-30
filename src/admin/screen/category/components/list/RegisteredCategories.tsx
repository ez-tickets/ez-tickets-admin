import RegisteredCategory from "@/admin/screen/category/components/list/RegisteredCategory.tsx";
import {
  type OrderedCategory,
  fetchCategories,
  reorderCategories,
} from "@/cmds/categories.ts";
import {
  DndContext,
  type DragEndEvent,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useQuery } from "@tanstack/react-query";
import { Fragment, useState } from "react";

function RegisteredCategories() {
  const sensors = useSensors(useSensor(PointerSensor));

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) return <div>Loading...</div>;

  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const [categories, setCategories] = useState<OrderedCategory[]>(data!); //並び替える用のstate

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
            <RegisteredCategory key={category.id} category={category} />
          ))}
        </SortableContext>
      </DndContext>
    </Fragment>
  );
}

export default RegisteredCategories;
