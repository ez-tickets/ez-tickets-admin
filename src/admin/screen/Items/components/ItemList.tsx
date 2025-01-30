import Items from "@/admin/screen/Items/components/Items.tsx";
import { itemListStyle } from "@/admin/screen/Items/components/style/ItemList.css.ts";
import { useProductModalStateStore } from "@/admin/store/ModalStateStore.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ListContainer from "@/parts/ListContainer.tsx";
import ListHeader from "@/parts/ListHeader.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment } from "react";

function ItemList() {
  const { changeRegisterModalFlag } = useProductModalStateStore();

  return (
    <Fragment>
      <ListContainer
        title={"商品"}
        buttonElement={
          <ExecuteButton
            name={"新規登録"}
            style={executeButtonStyle.default}
            executeHandler={() => changeRegisterModalFlag(true)}
          />
        }
        headerContainer={
          <ListHeader
            headers={
              <Fragment>
                <div className={itemListStyle.img}>画像</div>
                <div className={itemListStyle.name}>商品名</div>
                <div className={itemListStyle.price}>価格</div>
              </Fragment>
            }
          />
        }
        lists={<Items />}
      />
    </Fragment>
  );
}

export default ItemList;
