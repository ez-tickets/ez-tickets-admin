import RegisteredProduct from "@/admin/screen/register/list/registryProd/components/RegisteredProduct.tsx";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { Fragment } from "react";

function RegisteredProducts() {
  const { prodRegisterQuery } = useProdRegistrationStore();

  return (
    <Fragment>
      {prodRegisterQuery.map((product) => (
        <RegisteredProduct
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          path={product.img}
        />
      ))}
    </Fragment>
  );
}

export default RegisteredProducts;
