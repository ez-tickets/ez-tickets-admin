import { itemStyle } from "@/admin/screen/Items/components/style/Item.css.ts";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment } from "react";

type ItemProps = {
  id: string;
  name: string;
  category: string | null;
  desc: string;
  price: number;
  path: string;
  setEditModal: (flag: boolean) => void;
};

function Item({
  id,
  name,
  category,
  desc,
  price,
  path,
  setEditModal,
}: ItemProps) {
  const { setEditProduct } = useEditProductStore();

  const openEditModalHandler = () => {
    setEditProduct({
      id: id,
      name: name,
      category: category,
      desc: desc,
      price: price,
      path: path,
      available: false,
    });
    setEditModal(true);
  };

  return (
    <Fragment>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className={itemStyle.list} onClick={openEditModalHandler}>
        <div className={itemStyle.imgContainer}>
          {path !== "" ? (
            <img
              src={convertFileSrc(path)}
              alt={path}
              className={itemStyle.img}
            />
          ) : (
            <div className={itemStyle.img} />
          )}
        </div>
        <div className={itemStyle.name}>{name}</div>
        <div className={itemStyle.desc}>{desc}</div>
        {/*todo: データが取得できるようになったら差し替え*/}
        <div className={itemStyle.price}>{price}</div>
        {/*<div className={itemStyle.price}>{price.toLocaleString()}</div>*/}
      </div>
    </Fragment>
  );
}

export default Item;
