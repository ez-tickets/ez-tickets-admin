import RegisteredProduct from "@/admin/screen/Register/List/components/RegisteredProduct.tsx";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { Fragment } from "react";

function RegisteredProducts() {
  const { prodRegisterQuery } = useProdRegistrationStore();

  return (
    <Fragment>
      {prodRegisterQuery.map((product) => (
        <RegisteredProduct
          key={product.id}
          name={product.name}
          price={product.price}
          path={product.img}
        />
      ))}
    </Fragment>
  );
}

export default RegisteredProducts;
