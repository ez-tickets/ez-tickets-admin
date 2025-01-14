import { registeredProdStyle } from "@/admin/screen/category/product/list/components/style/RegisteredProd.css.ts";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment } from "react";

type RegisteredProdProps = {
  id: string;
  name: string;
  category: string | null;
  desc: string;
  price: number;
  path: string;
  available: boolean;
  isAvailableToggle: boolean;
  setIsAvailableToggle: (flag: boolean) => void;
  setEditModal: (flag: boolean) => void;
};

function RegisteredProd({
  id,
  name,
  category,
  desc,
  price,
  path,
  available,
  isAvailableToggle,
  setIsAvailableToggle,
  setEditModal,
}: RegisteredProdProps) {
  const { setEditProduct } = useEditProductStore();

  const openEditModalHandler = () => {
    setEditProduct({
      id: id,
      name: name,
      category: category,
      desc: desc,
      price: price,
      path: path,
      available: available,
    });
    setEditModal(true);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const changeAvailableHandler = (id: string) => {};

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
          {path !== "" ? (
            <img
              src={convertFileSrc(path)}
              alt={path}
              className={registeredProdStyle.img}
            />
          ) : (
            <div className={registeredProdStyle.img} />
          )}
        </div>
        <div className={registeredProdStyle.name}>{name}</div>
        <div className={registeredProdStyle.desc}>{desc}</div>
        <div className={registeredProdStyle.price}>{price}</div>
        <div className={registeredProdStyle.saleState}>
          {isAvailableToggle ? (
            <input
              type="checkbox"
              className={registeredProdStyle.saleState}
              onChange={() => changeAvailableHandler(id)}
            />
          ) : (
            ""
          )}

          {available ? (
            <span className={registeredProdStyle.textSell}>販売中</span>
          ) : (
            <span className={registeredProdStyle.textNotSell}>休止中</span>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default RegisteredProd;
