import Item from "@/admin/screen/Items/components/Item.tsx";
import { fetchProducts } from "@/cmds/products.ts";
import { Fragment } from "react";
import {useQuery} from "@tanstack/react-query";

type ItemsProps = {
  setEditModal: (flag: boolean) => void;
};

function Items({ setEditModal }: ItemsProps) {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  })

  return (
    <Fragment>
      {products?.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          category={item.category}
          desc={item.desc}
          price={item.price}
          path={item.path}
          setEditModal={setEditModal}
        />
      ))}
    </Fragment>
  );
}

export default Items;
