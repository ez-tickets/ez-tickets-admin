import RegisteredProd from "@/admin/screen/category/product/list/components/RegisteredProd.tsx";
import { useCatalogRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { Fragment } from "react";

type RegisteredProdsProps = {
  setEditModal: (flag: boolean) => void;
};

function RegisteredProds({ setEditModal }: RegisteredProdsProps) {
  //todo: カタログのデータ取得API
  const { catalogRegisterQuery } = useCatalogRegistrationStore();

  return (
    <Fragment>
      {catalogRegisterQuery.map((catalog) => (
        <RegisteredProd
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

export default RegisteredProds;
