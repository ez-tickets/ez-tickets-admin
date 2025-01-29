import ItemList from "@/admin/screen/Items/components/ItemList.tsx";
import RegisterProdModalFromAllItems from "@/admin/screen/Items/components/RegisterProdModalFromAllItems.tsx";
import EditProdModal from "@/admin/screen/category/product/edit/EditProdModal.tsx";
import { useProductModalStateStore } from "@/admin/store/ModalStateStore.ts";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";

function AllItems() {
  const { editModalFlag } = useProductModalStateStore();
  return (
    <Fragment>
      <Header title={"商品一覧"} />
      <ItemList />
      <RegisterProdModalFromAllItems />
      {editModalFlag ? <EditProdModal /> : ""}
    </Fragment>
  );
}

export default AllItems;
