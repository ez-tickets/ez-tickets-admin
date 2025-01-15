import RegisteredProd from "@/admin/screen/category/product/list/components/RegisteredProd.tsx";
import type { Product } from "@/cmds/products.ts";
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
import { Fragment } from "react";

type RegisteredProdsProps = {
  categoryID: string;
  products: Product[];
  updateProducts: Product[];
  isAvailableToggle: boolean;
  setProducts: (prod: Product[]) => void;
  setUpdateProducts: (prod: Product[]) => void;
  setEditModal: (flag: boolean) => void;
};

function RegisteredProds({
  categoryID,
  products,
  updateProducts,
  isAvailableToggle,
  setProducts,
  setUpdateProducts,
  setEditModal,
}: RegisteredProdsProps) {
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
      const oldIndex = products.findIndex((v) => v.id === active.id);
      const newIndex = products.findIndex((v) => v.id === over.id);
      const updatedProducts = arrayMove(products, oldIndex, newIndex);
      setProducts(updatedProducts);
      //todo 並べ替え後のデータをサーバーに送る処理 --> {categoryID: categoryID, products: updatedProducts}
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
          {products.map((prod) => (
            <RegisteredProd
              key={prod.id}
              prod={prod}
              updateProducts={updateProducts}
              isAvailableToggle={isAvailableToggle}
              setUpdateProducts={setUpdateProducts}
              setEditModal={setEditModal}
            />
          ))}
        </SortableContext>
      </DndContext>
    </Fragment>
  );
}

export default RegisteredProds;
