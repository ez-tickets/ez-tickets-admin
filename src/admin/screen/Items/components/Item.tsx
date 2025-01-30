import { itemStyle } from "@/admin/screen/Items/components/style/Item.css.ts";
import { useProductModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import { type Product, fetchProductDetails } from "@/cmds/products.ts";
import { Fragment } from "react";

type ItemProps = {
  item: Product;
};

function Item({ item }: ItemProps) {
  const { setEditProduct } = useEditProductStore();
  const { changeEditModalFlag } = useProductModalStateStore();

  const openEditModalHandler = async () => {
    const editItem = await fetchProductDetails(item.id);
    setEditProduct(editItem);
    changeEditModalFlag(true);
  };

  return (
    <Fragment>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className={itemStyle.list} onClick={openEditModalHandler}>
        <div className={itemStyle.imgContainer}>
          <img
            src={`http://100.77.238.23:3650/images/${item.id}`}
            alt={""}
            className={itemStyle.img}
          />
        </div>
        <div className={itemStyle.name}>{item.name}</div>
        <div className={itemStyle.price}>{item.price.toLocaleString()}</div>
      </div>
    </Fragment>
  );
}

export default Item;
