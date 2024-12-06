import Item from "@/admin/screen/home/components/Item.tsx";
import { IconBox, IconToolsKitchen2 } from "@tabler/icons-react";
import { Fragment } from "react";

function Items() {
  return (
    <Fragment>
      <Item path={"registeredProd"} labelName={"商品管理"} icon={<IconBox />} />
      <Item
        path={"registeredCategory"}
        labelName={"カテゴリー管理"}
        icon={<IconToolsKitchen2 />}
      />
    </Fragment>
  );
}

export default Items;
