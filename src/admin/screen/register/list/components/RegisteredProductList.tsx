import RegisteredProducts from "@/admin/screen/register/list/components/RegisteredProducts.tsx";
import { registeredProductListStyle } from "@/admin/screen/register/list/components/style/RegisteredProductList.css.ts";
import { Fragment } from "react";

function RegisteredProductList() {
  return (
    <Fragment>
      <div className={registeredProductListStyle.listContainer}>
        <h2 className={registeredProductListStyle.listTitle}>登録商品</h2>
        <div className={registeredProductListStyle.listHeader}>
          <div className={registeredProductListStyle.headerPath}>画像</div>
          <div className={registeredProductListStyle.headerName}>商品名</div>
          <div className={registeredProductListStyle.headerPrice}>価格</div>
        </div>

        <RegisteredProducts />
      </div>
    </Fragment>
  );
}

export default RegisteredProductList;
