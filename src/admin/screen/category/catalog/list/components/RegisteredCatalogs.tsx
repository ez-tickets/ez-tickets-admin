import RegisteredCatalog from "@/admin/screen/category/catalog/list/components/RegisteredCatalog.tsx";
import { useCatalogRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { Fragment } from "react";

type RegisteredCatalogsProps = {
  setEditModal: (flag: boolean) => void;
};

function RegisteredCatalogs({ setEditModal }: RegisteredCatalogsProps) {
  //todo: カタログのデータ取得API
  const { catalogRegisterQuery } = useCatalogRegistrationStore();

  return (
    <Fragment>
      {catalogRegisterQuery.map((catalog) => (
        <RegisteredCatalog
          key={catalog.id}
          id={catalog.id}
          name={catalog.name}
          desc={catalog.desc}
          price={catalog.price}
          path={catalog.path}
          setEditModal={setEditModal}
        />
      ))}
    </Fragment>
  );
}

export default RegisteredCatalogs;
