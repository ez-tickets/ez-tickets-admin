import { registeredProdStyle } from "@/admin/screen/category/product/list/components/style/RegisteredProd.css.ts";
import { useProductModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import {
  type ProductInCategory,
  fetchProductDetails,
} from "@/cmds/products.ts";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Fragment } from "react";

type RegisteredProdProps = {
  prod: ProductInCategory;
};

function RegisteredProd({ prod }: RegisteredProdProps) {
  const { setEditProduct } = useEditProductStore();
  const { changeEditModalFlag } = useProductModalStateStore();

  const openEditModalHandler = async () => {
    const editProduct = await fetchProductDetails(prod.id);
    setEditProduct(editProduct);
    changeEditModalFlag(true);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: prod.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Fragment>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={registeredProdStyle.list}
        style={style}
        ref={setNodeRef}
        onClick={openEditModalHandler}
      >
        <div
          className={registeredProdStyle.congruent}
          {...listeners}
          {...attributes}
        >
          ≡
        </div>
        <div className={registeredProdStyle.imgContainer}>
          <img
            src={`http://100.77.238.23:3650/images/${prod.id}`}
            alt={""}
            className={registeredProdStyle.img}
          />
        </div>
        <div className={registeredProdStyle.name}>{prod.name}</div>
        <div className={registeredProdStyle.price}>
          {(1000).toLocaleString()}
        </div>
      </div>
    </Fragment>
  );
}

export default RegisteredProd;
