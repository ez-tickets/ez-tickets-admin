import RegisteredProdList from "@/admin/screen/category/product/list/components/RegisteredProdList.tsx";
import Header from "@/parts/Header.tsx";
import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type CategoryState = {
  id: string;
  name: string;
};

function RegisteredProd() {
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
      <RegisteredProdList categoryID={categoryID} categoryName={categoryName} />
    </Fragment>
  );
}

export default RegisteredProd;
