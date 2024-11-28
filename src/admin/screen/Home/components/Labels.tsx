import Label from "@/admin/screen/Home/components/Label.tsx";
import { labelsStyle } from "@/admin/screen/Home/components/style/Labels.css.ts";
import { IconBox, IconToolsKitchen2 } from "@tabler/icons-react";
import { Fragment } from "react";

function Labels() {
  return (
    <Fragment>
      <Label
        path={"registerList"}
        labelName={"登録管理"}
        icon={<IconBox className={labelsStyle.labelIcon} />}
      />

      <Label
        path={"productList"}
        labelName={"メニュー管理"}
        icon={<IconToolsKitchen2 className={labelsStyle.labelIcon} />}
      />
    </Fragment>
  );
}

export default Labels;
