import { adminStyle } from "@/admin/Admin.css.ts";
import Contents from "@/admin/components/Contents.tsx";
import SideBar from "@/admin/components/SideBar.tsx";
import { Fragment, useEffect } from "react";
import Modal from "react-modal";

function Admin() {
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

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
