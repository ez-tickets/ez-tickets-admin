import EditProdModal from "@/admin/screen/category/product/edit/EditProdModal.tsx";
import RegisteredProdList from "@/admin/screen/category/product/list/components/RegisteredProdList.tsx";
import RegisterProdModal from "@/admin/screen/category/product/register/RegisterProdModal.tsx";
import { useProductModalStateStore } from "@/admin/store/ModalStateStore.ts";
import Header from "@/parts/Header.tsx";
import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type CategoryState = {
  id: string;
  name: string;
};

function Product() {
  const { editModalFlag } = useProductModalStateStore();
  const { id, name } = useLocation().state as CategoryState;
  const [categoryID, setCategoryID] = useState<string>(id);
  const [categoryName, setCategoryName] = useState<string>(name);

  useEffect(() => {
    setCategoryID(id);
    setCategoryName(name);
  }, [id, name]);

  return (
    <Fragment>
      <Header title={categoryName} />
      <RegisteredProdList categoryID={categoryID} />
      <RegisterProdModal categoryID={categoryID} categoryName={categoryName} />
      {editModalFlag ? <EditProdModal /> : ""}
    </Fragment>
  );
}

export default Product;
