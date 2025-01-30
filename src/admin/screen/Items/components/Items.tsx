import Item from "@/admin/screen/Items/components/Item.tsx";
import { fetchProducts } from "@/cmds/products.ts";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";

function Items() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <Fragment>
      {products?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Fragment>
  );
}

export default Items;
