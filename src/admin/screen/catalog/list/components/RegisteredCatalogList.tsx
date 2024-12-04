import { registeredCatalogListStyle } from "@/admin/screen/catalog/list/components/style/RegisteredCatalogList.css.ts";
import ListContainer from "@/parts/ListContainer.tsx";
import ListHeader from "@/parts/ListHeader.tsx";
import ListItem from "@/parts/ListItem.tsx";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment, useState } from "react";

function RegisteredCatalogList() {
  const [path] = useState<string>("");

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
        lists={
          <Fragment>
            <ListItem
              block={
                <Fragment>
                  <div className={registeredCatalogListStyle.img}>
                    {path !== "" ? (
                      <img
                        src={convertFileSrc(path)}
                        alt={path}
                        className={registeredCatalogListStyle.img}
                      />
                    ) : (
                      <div className={registeredCatalogListStyle.img} />
                    )}
                  </div>
                  <div className={registeredCatalogListStyle.name}>
                    {"海鮮三種盛り定食"}
                  </div>
                  <div className={registeredCatalogListStyle.main}>
                    {"田中"}
                  </div>
                  <div className={registeredCatalogListStyle.sub}>{"3件"}</div>
                  <div className={registeredCatalogListStyle.option}>
                    {"5件"}
                  </div>
                  <div className={registeredCatalogListStyle.desc}>
                    {
                      "豊後水道で乱獲した「はまち」「たい」「あじ」をふんだんに使用した商品となっています。"
                    }
                  </div>
                  <div className={registeredCatalogListStyle.price}>
                    {(5000).toLocaleString()}
                  </div>
                </Fragment>
              }
              executeHandler={() => {}}
            />
          </Fragment>
        }
      />
    </Fragment>
  );
}

export default RegisteredCatalogList;
