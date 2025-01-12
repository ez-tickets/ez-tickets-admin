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
  setEditModal: (flag: boolean) => void;
};

function RegisteredProd({
  id,
  name,
  category,
  desc,
  price,
  path,
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
    });
    setEditModal(true);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

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
        {/*todo: データが取得できるようになったら差し替え*/}
        <div className={registeredProdStyle.price}>{price}</div>
        {/*<div className={registeredProdStyle.price}>{price.toLocaleString()}</div>*/}
      </div>
    </Fragment>
  );
}

export default RegisteredProd;
