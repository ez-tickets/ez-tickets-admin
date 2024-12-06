import RegisteredProduct from "@/admin/screen/product/components/RegisteredProduct.tsx";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { Fragment } from "react";

type RegisteredProductsProps = {
  setEditModal: (flag: boolean) => void;
};

function RegisteredProducts({ setEditModal }: RegisteredProductsProps) {
  const { prodRegisterQuery } = useProdRegistrationStore();

  return (
    <Fragment>
      {prodRegisterQuery.map((product) => (
        <RegisteredProduct
          key={product.id}
          id={product.id}
          name={product.name}
          path={product.img}
          setEditModal={setEditModal}
        />
      ))}
    </Fragment>
  );
}

export default RegisteredProducts;
