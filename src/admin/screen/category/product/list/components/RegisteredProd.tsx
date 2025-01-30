import type { RegisteredProdsInImgState } from "@/admin/screen/category/product/list/components/RegisteredProds.tsx";
import { registeredProdStyle } from "@/admin/screen/category/product/list/components/style/RegisteredProd.css.ts";
import { useProductModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import { fetchProductDetails } from "@/cmds/products.ts";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Fragment } from "react";

type RegisteredProdProps = {
  prod: RegisteredProdsInImgState;
};

function RegisteredProd({ prod }: RegisteredProdProps) {
  const { setEditProduct } = useEditProductStore();
  const { changeEditModalFlag } = useProductModalStateStore();

  const openEditModalHandler = async () => {
    const editProduct = await fetchProductDetails(prod.id);
    const imgPathInProduct = {
      ...editProduct,
      imgUrl: prod.imgUrl,
    };
    setEditProduct(imgPathInProduct);
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
          <img src={prod.imgUrl} alt={""} className={registeredProdStyle.img} />
        </div>
        <div className={registeredProdStyle.name}>{prod.name}</div>
        <div className={registeredProdStyle.price}>
          {prod.price.toLocaleString()}円
        </div>
      </div>
    </Fragment>
  );
}

export default RegisteredProd;
