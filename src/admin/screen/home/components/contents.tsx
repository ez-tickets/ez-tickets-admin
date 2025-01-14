import Content from "@/admin/screen/home/components/content.tsx";
import { IconBook, IconBox } from "@tabler/icons-react";
import { Fragment } from "react";

function Contents() {
  return (
    <Fragment>
      <Content path={"allItems"} labelName={"商品一覧"} icon={<IconBox />} />

      <Content
        path={"registeredCategory"}
        labelName={"カテゴリー管理"}
        icon={<IconBook />}
      />
    </Fragment>
  );
}

export default Contents;
