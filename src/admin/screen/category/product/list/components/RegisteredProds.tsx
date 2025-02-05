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

export type RegisteredProdsInImgState = {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  ordering: number;
};

function RegisteredProds({ categoryID }: RegisteredProdsProps) {
  const sensors = useSensors(useSensor(PointerSensor));

  const { data: products, isLoading, refetch } = useQuery({
    queryKey: ["products_in_category", categoryID],
    queryFn: () => fetchProductsInCategory(categoryID),
    select: (products) => {
      return products.map((product): RegisteredProdsInImgState => ({
        ...product,
        imgUrl: `http://100.77.238.23:3650/images/${product.id}?_t=${new Date().getTime()}`,
      }))
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (!products) return;

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;
    if (!products) return;

    if (active.id !== over.id) {
      const oldIndex = products.findIndex((v) => v.id === active.id);
      const newIndex = products.findIndex((v) => v.id === over.id);
      const updatedProducts = arrayMove(products, oldIndex, newIndex);
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
        <SortableContext
          items={products}
          strategy={verticalListSortingStrategy}
        >
          {products?.map((prod) => (
            <RegisteredProd key={prod.id} prod={prod} />
          ))}
        </SortableContext>
      </DndContext>
    </Fragment>
  );
}

export default RegisteredProds;
