import { adminStyle } from "@/admin/Admin.css.ts";
import Contents from "@/admin/components/Contents.tsx";
import SideBar from "@/admin/components/SideBar.tsx";
import { Fragment } from "react";

function Admin() {
  return (
    <Fragment>
      <div className={adminStyle.adminContainer}>
        <SideBar />
        <Contents />
      </div>
    </Fragment>
  );
}

export default Admin;
