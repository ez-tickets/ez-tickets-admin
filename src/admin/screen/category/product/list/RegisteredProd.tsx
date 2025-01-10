import RegisteredProdList from "@/admin/screen/category/product/list/components/RegisteredProdList.tsx";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";

//todo: カテゴリーに属した商品の配列を追加することになる
type State = {
  title: string;
};

function RegisteredProd() {
  const { title } = useLocation().state as State;

  return (
    <Fragment>
      <Header title={title} />
      <RegisteredProdList />
    </Fragment>
  );
}

export default RegisteredProd;
