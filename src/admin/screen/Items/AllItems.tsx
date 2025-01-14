import { Fragment } from "react";
import Header from "@/parts/Header.tsx";
import ItemList from "@/admin/screen/Items/components/ItemList.tsx";

function AllItems() {
  return (
  <Fragment>
    <Header title={"商品一覧"} />
    <ItemList />
  </Fragment>
  );
}

export default AllItems;
