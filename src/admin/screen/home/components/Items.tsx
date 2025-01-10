import Item from "@/admin/screen/home/components/Item.tsx";
import { IconBook } from "@tabler/icons-react";
import { Fragment } from "react";

function Items() {
  return (
    <Fragment>
      <Item
        path={"registeredCategory"}
        labelName={"カテゴリー管理"}
        icon={<IconBook />}
      />
    </Fragment>
  );
}

export default Items;
