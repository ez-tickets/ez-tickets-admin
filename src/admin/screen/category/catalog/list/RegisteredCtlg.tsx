import RegisteredCatalogList from "@/admin/screen/category/catalog/list/components/RegisteredCatalogList.tsx";
import { useCatalogRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { debug } from "@/admin/store/action/ProdRegistrationAction.ts";
import Header from "@/parts/Header.tsx";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";

type State = {
  title: string;
};

function RegisteredCtlg() {
  const { title } = useLocation().state as State;
  const { catalogRegisterDispatcher } = useCatalogRegistrationStore();

  return (
    <Fragment>
      <Header
        title={title}
        element={
          <button
            style={{ border: "1px solid lightgray", borderRadius: "5px" }}
            type={"button"}
            onClick={() => catalogRegisterDispatcher(debug())}
          >
            debug
          </button>
        }
      />
      <RegisteredCatalogList />
    </Fragment>
  );
}

export default RegisteredCtlg;
