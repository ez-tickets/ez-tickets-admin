import RegisteredProd from "@/admin/screen/category/product/list/components/RegisteredProd.tsx";
import { type Product, fetchProducts } from "@/cmds/products.ts";
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

type RegisteredProdsProps = {
  setEditModal: (flag: boolean) => void;
  categoryID: string;
  isAvailableToggle: boolean;
  setIsAvailableToggle: (flag: boolean) => void;
};

function RegisteredProds({ setEditModal, categoryID, isAvailableToggle, setIsAvailableToggle }: RegisteredProdsProps) {
  const [products, setProducts] = useState<Product[]>([]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    (async () => {
      //todo: categoryIDを使ってfetchProductsを呼び出す
      const products = await fetchProducts();
      products.sort((a, b) => a.order - b.order);
      setProducts(products);
    })();
  }, [products]);

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
              id={prod.id}
              name={prod.name}
              category={prod.category}
              desc={prod.desc}
              price={prod.price}
              path={prod.path}
              available={prod.available}
              isAvailableToggle={isAvailableToggle}
              setIsAvailableToggle={setIsAvailableToggle}
              setEditModal={setEditModal}
            />
          ))}
        </SortableContext>
      </DndContext>
    </Fragment>
  );
}

export default RegisteredProds;
