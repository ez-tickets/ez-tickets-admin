import Item from "@/admin/screen/Items/components/Item.tsx";
import { type Product, fetchProducts } from "@/cmds/products.ts";
import { Fragment, useEffect, useState } from "react";

type ItemsProps = {
  setEditModal: (flag: boolean) => void;
};

function Items({ setEditModal }: ItemsProps) {
  const [allItems, setAllItems] = useState<Product[]>([]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    (async () => {
      //todo: APIから商品情報を取得する処理変更
      const items = await fetchProducts();
      items.sort((a, b) => a.name.localeCompare(b.name, "ja"));
      setAllItems(items);
    })();
  }, [allItems]);

  return (
    <Fragment>
      {allItems.map((item) => (
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
