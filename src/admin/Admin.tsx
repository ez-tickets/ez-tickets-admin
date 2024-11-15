import { adminStyle } from "@/admin/Admin.css.ts";
import SideBar from "@/admin/components/SideBar.tsx";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <Fragment>
      <div className={adminStyle.adminContainer}>
        <SideBar />
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Admin;
