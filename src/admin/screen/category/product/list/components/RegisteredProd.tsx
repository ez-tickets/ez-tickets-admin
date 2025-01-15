import { registeredProdStyle } from "@/admin/screen/category/product/list/components/style/RegisteredProd.css.ts";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import type { Product } from "@/cmds/products.ts";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment, useState } from "react";

type RegisteredProdProps = {
  prod: Product;
  updateProducts: Product[];
  isAvailableToggle: boolean;
  setUpdateProducts: (prod: Product[]) => void;
  setEditModal: (flag: boolean) => void;
};

function RegisteredProd({
  prod,
  updateProducts,
  isAvailableToggle,
  setUpdateProducts,
  setEditModal,
}: RegisteredProdProps) {
  const { setEditProduct } = useEditProductStore();
  const [prodAvailableState, setProdAvailableState] = useState<boolean>(
    prod.available,
  );

  const openEditModalHandler = () => {
    if (isAvailableToggle) return;

    setEditProduct({
      id: prod.id,
      name: prod.name,
      category: prod.category,
      desc: prod.desc,
      price: prod.price,
      path: prod.path,
      available: prod.available,
    });
    setEditModal(true);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: prod.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const availableChangeStateHandler = (id: string, changedState: boolean) => {
    for (const product of updateProducts) {
      if (product.id === id) {
        const updatedProduct = [
          ...updateProducts,
          { ...product, available: changedState },
        ];
        setProdAvailableState(changedState);
        setUpdateProducts(updatedProduct);
      }
    }
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
        {isAvailableToggle ? (
          <div className={registeredProdStyle.notCongruent} />
        ) : (
          <div
            className={registeredProdStyle.congruent}
            {...(isAvailableToggle ? {} : { ...listeners, ...attributes })}
          >
            ≡
          </div>
        )}
        <div className={registeredProdStyle.imgContainer}>
          {prod.path !== "" ? (
            <img
              src={convertFileSrc(prod.path)}
              alt={prod.path}
              className={registeredProdStyle.img}
            />
          ) : (
            <div className={registeredProdStyle.img} />
          )}
        </div>
        <div className={registeredProdStyle.name}>{prod.name}</div>
        <div className={registeredProdStyle.desc}>{prod.desc}</div>
        <div className={registeredProdStyle.price}>{prod.price}</div>
        <div className={registeredProdStyle.saleState}>
          {isAvailableToggle ? (
            <input
              type="checkbox"
              id={prod.id}
              className={registeredProdStyle.checkBox}
              checked={prod.available}
              onChange={() =>
                availableChangeStateHandler(prod.id, !prodAvailableState)
              }
            />
          ) : (
            ""
          )}

          {prodAvailableState ? (
            <label htmlFor={prod.id} className={registeredProdStyle.textSell}>
              販売中
            </label>
          ) : (
            <label
              htmlFor={prod.id}
              className={registeredProdStyle.textNotSell}
            >
              休止中
            </label>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default RegisteredProd;
