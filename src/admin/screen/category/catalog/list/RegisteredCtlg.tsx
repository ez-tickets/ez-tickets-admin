import RegisteredCatalogList from "@/admin/screen/category/catalog/list/components/RegisteredCatalogList.tsx";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";

type State = {
  title: string;
};

function RegisteredCtlg() {
  const { title } = useLocation().state as State;

  return (
    <Fragment>
      <Header title={title} />
      <RegisteredCatalogList />
    </Fragment>
  );
}

export default RegisteredCtlg;
