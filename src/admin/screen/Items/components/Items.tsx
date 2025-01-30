import Item from "@/admin/screen/Items/components/Item.tsx";
import { fetchProducts } from "@/cmds/products.ts";
import { useQuery } from "@tanstack/react-query";
import { Fragment, useState } from "react";

export type RegisteredItemsInImgState = {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
};

function Items() {
  const [items, setItems] = useState<RegisteredItemsInImgState[]>([]);

  useQuery({
    queryKey: ["products_in_category"],
    queryFn: async () => {
      const items = await fetchProducts();
      const imgInItems = items.map((item) => ({
        ...item,
        imgUrl: `http://100.77.238.23:3650/images/${item.id}?t=${new Date().getTime()}`,
      }));
      setItems(imgInItems);
    },
  });

  return (
    <Fragment>
      {items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Fragment>
  );
}

export default Items;
