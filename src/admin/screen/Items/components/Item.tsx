import type { RegisteredItemsInImgState } from "@/admin/screen/Items/components/Items.tsx";
import { itemStyle } from "@/admin/screen/Items/components/style/Item.css.ts";
import { useProductModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import { fetchProductDetails } from "@/cmds/products.ts";
import { Fragment } from "react";

type ItemProps = {
  item: RegisteredItemsInImgState;
};

function Item({ item }: ItemProps) {
  const { setEditProduct } = useEditProductStore();
  const { changeEditModalFlag } = useProductModalStateStore();

  const openEditModalHandler = async () => {
    const editProduct = await fetchProductDetails(item.id);
    const imgPathInProduct = {
      ...editProduct,
      imgUrl: item.imgUrl,
    };
    setEditProduct(imgPathInProduct);
    changeEditModalFlag(true);
  };

  return (
    <Fragment>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className={itemStyle.list} onClick={openEditModalHandler}>
        <div className={itemStyle.imgContainer}>
          <img src={item.imgUrl} alt={""} className={itemStyle.img} />
        </div>
        <div className={itemStyle.name}>{item.name}</div>
        <div className={itemStyle.price}>{item.price.toLocaleString()}</div>
      </div>
    </Fragment>
  );
}

export default Item;
