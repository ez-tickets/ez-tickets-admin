import RegisteredProducts from "@/admin/screen/register/list/registryProd/components/RegisteredProducts.tsx";
import { registeredProductListStyle } from "@/admin/screen/register/list/registryProd/components/style/RegisteredProductList.css.ts";
import ListContainer from "@/parts/ListContainer.tsx";
import ListHeader from "@/parts/ListHeader.tsx";
import { Fragment } from "react";

function RegisteredProductList() {
  return (
    <Fragment>
      <ListContainer
        title={"登録商品"}
        headerContainer={
          <ListHeader
            headers={
              <Fragment>
                <div className={registeredProductListStyle.path}>画像</div>
                <div className={registeredProductListStyle.name}>商品名</div>
                <div className={registeredProductListStyle.price}>価格</div>
              </Fragment>
            }
          />
        }
        lists={<RegisteredProducts />}
      />
    </Fragment>
  );
}

export default RegisteredProductList;
