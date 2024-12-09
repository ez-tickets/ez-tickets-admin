import RegisteredCatalog from "@/admin/screen/catalog/list/components/RegisteredCatalog.tsx";
import { useCatalogRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { Fragment } from "react";

function RegisteredCatalogs() {
  const { catalogRegisterQuery } = useCatalogRegistrationStore();

  return (
    <Fragment>
      {catalogRegisterQuery.map((catalog) => (
        <RegisteredCatalog
          key={catalog.id}
          name={catalog.name}
          desc={catalog.desc}
          price={catalog.price}
          img={catalog.img}
          main={catalog.main}
        />
      ))}
    </Fragment>
  );
}

export default RegisteredCatalogs;
