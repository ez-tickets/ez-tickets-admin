import { registerListStyle } from "@/admin/screen/Register/List/RegisterList.css.ts";
import LabelLinks from "@/admin/screen/Register/List/components/LabelLinks.tsx";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function RegisterList() {
  return (
    <Fragment>
      <div className={registerListStyle.registerListContainer}>
        <div className={registerListStyle.header}>
          <h1 className={registerListStyle.title}>登録詳細</h1>
          <LabelLinks />
        </div>

        <Outlet />
      </div>
    </Fragment>
  );
}

export default RegisterList;
