import RegisteredProduct from "@/admin/screen/product/components/RegisteredProduct.tsx";
import { type Product, fetchProducts } from "@/cmds/products.ts";
import { Fragment, useEffect, useState } from "react";

type RegisteredProductsProps = {
  setEditModal: (flag: boolean) => void;
};

function RegisteredProducts({ setEditModal }: RegisteredProductsProps) {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    (async () => {
      const fetched = await fetchProducts();
      setProducts(fetched);
    })();
  }, []);

  return (
    <Fragment>
      {products?.map((product) => (
        <RegisteredProduct
          key={product.id}
          id={product.id}
          name={product.name}
          path={`http://localhost:3650/contents?id=${product.id}`}
          setEditModal={setEditModal}
        />
      ))}
    </Fragment>
  );
}

export default RegisteredProducts;
