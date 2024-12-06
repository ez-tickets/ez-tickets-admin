import RegisteredCatalogs from "@/admin/screen/catalog/list/components/RegisteredCatalogs.tsx";
import { registeredCatalogListStyle } from "@/admin/screen/catalog/list/components/style/RegisteredCatalogList.css.ts";
import ListContainer from "@/parts/ListContainer.tsx";
import ListHeader from "@/parts/ListHeader.tsx";
import { Fragment } from "react";

function RegisteredCatalogList() {
  return (
    <Fragment>
      <ListContainer
        title={"カタログ一覧"}
        headerContainer={
          <ListHeader
            headers={
              <Fragment>
                <div className={registeredCatalogListStyle.img}>画像</div>
                <div className={registeredCatalogListStyle.name}>
                  カタログ名
                </div>
                <div className={registeredCatalogListStyle.main}>
                  メイン商品
                </div>
                <div className={registeredCatalogListStyle.sub}>サブ商品</div>
                <div className={registeredCatalogListStyle.option}>
                  オプション
                </div>
                <div className={registeredCatalogListStyle.desc}>説明</div>
                <div className={registeredCatalogListStyle.price}>価格</div>
              </Fragment>
            }
          />
        }
        lists={<RegisteredCatalogs />}
      />
    </Fragment>
  );
}

export default RegisteredCatalogList;
