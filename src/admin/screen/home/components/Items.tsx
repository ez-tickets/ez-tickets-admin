import Item from "@/admin/screen/home/components/Item.tsx";
import { IconBox, IconToolsKitchen2 } from "@tabler/icons-react";
import { Fragment } from "react";

function Items() {
  return (
    <Fragment>
      <Item path={"registerList"} labelName={"登録管理"} icon={<IconBox />} />
      <Item
        path={"productList"}
        labelName={"メニュー管理"}
        icon={<IconToolsKitchen2 />}
      />
    </Fragment>
  );
}

export default Items;
