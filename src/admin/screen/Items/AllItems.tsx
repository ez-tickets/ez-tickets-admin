import ItemList from "@/admin/screen/Items/components/ItemList.tsx";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";

function AllItems() {
  return (
    <Fragment>
      <Header title={"商品一覧"} />
      <ItemList />
    </Fragment>
  );
}

export default AllItems;
