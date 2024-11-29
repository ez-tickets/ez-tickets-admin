import Labels from "@/admin/screen/register/list/components/Labels.tsx";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function RegisterList() {
  return (
    <Fragment>
      <Header title={"登録詳細"} element={<Labels />} />
      <Outlet />
    </Fragment>
  );
}

export default RegisterList;
