import RegisteredCatalogList from "@/admin/screen/catalog/list/components/RegisteredCatalogList.tsx";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import Header from "@/parts/Header.tsx";
import { executeButtonStyle } from "@/parts/style/executeButton.css.ts";
import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type State = {
  title: string;
};

function RegisteredCatalog() {
  const { title } = useLocation().state as State;
  const navigate = useNavigate();

  return (
    <Fragment>
      <Header
        title={title}
        element={
          <ExecuteButton
            name={"新規登録"}
            style={executeButtonStyle.default}
            executeHandler={() =>
              navigate("/admin/catalogRegister", { state: { title } })
            }
          />
        }
      />
      <RegisteredCatalogList />
    </Fragment>
  );
}

export default RegisteredCatalog;
