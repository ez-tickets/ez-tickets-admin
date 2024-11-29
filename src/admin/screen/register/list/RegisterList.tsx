import { registerListStyle } from "@/admin/screen/register/list/RegisterList.css.ts";
import Labels from "@/admin/screen/register/list/components/Labels.tsx";
import Header from "@/components/Header.tsx";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function RegisterList() {
  return (
    <Fragment>
      <div className={registerListStyle.registerListContainer}>
        <Header title={"登録詳細"} element={<Labels />} />
        <Outlet />
      </div>
    </Fragment>
  );
}

export default RegisterList;
