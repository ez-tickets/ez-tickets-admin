import RegisteredProd from "@/admin/screen/category/product/list/components/RegisteredProd.tsx";
import {
  type ProductInCategory,
  fetchProductsInCategory,
  reorderProducts,
} from "@/cmds/products.ts";
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
import { Fragment } from "react";

type RegisteredProdsProps = {
  categoryID: string;
};

function RegisteredProds({ categoryID }: RegisteredProdsProps) {
  const sensors = useSensors(useSensor(PointerSensor));

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["products_in_category", categoryID],
    queryFn: async () => await fetchProductsInCategory(categoryID),
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return;

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;
    if (!data) return;

    if (active.id !== over.id) {
      const oldIndex = data.findIndex((v) => v.id === active.id);
      const newIndex = data.findIndex((v) => v.id === over.id);
      const updatedProducts = arrayMove(data, oldIndex, newIndex);
      const reordered: ProductInCategory[] = [];
      updatedProducts.map((product, index) => {
        product.ordering = index;
        reordered.push(product);
      });

      await reorderProducts(categoryID, reordered);
      await refetch();
    }
  };

  return (
    <Fragment>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={data} strategy={verticalListSortingStrategy}>
          {data?.map((prod) => (
            <RegisteredProd key={prod.id} prod={prod} />
          ))}
        </SortableContext>
      </DndContext>
    </Fragment>
  );
}

export default RegisteredProds;
