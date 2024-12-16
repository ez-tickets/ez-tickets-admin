import RegisteredProduct from "@/admin/screen/product/components/RegisteredProduct.tsx";
import { type Product, fetchProducts } from "@/cmds/products.ts";
import { Fragment, useEffect, useState } from "react";

type RegisteredProductsProps = {
  setEditModal: (flag: boolean) => void;
  toggleModal: boolean;
};

function RegisteredProducts({
  setEditModal,
  toggleModal,
}: RegisteredProductsProps) {
  const [products, setProducts] = useState<Product[] | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    (async () => {
      const fetched = await fetchProducts();
      setProducts(fetched);
    })();
  }, [toggleModal]);

  return (
    <Fragment>
      {products?.map((product) => (
        <RegisteredProduct
          key={product.id}
          id={product.id}
          name={product.name}
          path={`http://100.77.238.23:3650/contents?id=${product.id}`}
          setEditModal={setEditModal}
        />
      ))}
    </Fragment>
  );
}

export default RegisteredProducts;
