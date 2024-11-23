import { productListStyle } from "@/admin/screen/Product/ProductList.css.ts";
import EditModal from "@/admin/screen/Product/components/EditModal.tsx";
import Product from "@/admin/screen/Product/components/Product.tsx";
import { registeredProducts } from "@/mockData.ts";
import { Fragment, useState } from "react";

function ProductList() {
  const [isFlag, setIsFlag] = useState<boolean>(false);
  return (
    <Fragment>
      <div className={productListStyle.prodListContainer}>
        <h1 className={productListStyle.title}>登録商品</h1>
        <div className={productListStyle.listHeader}>
          <div className={productListStyle.prodHead}>商品名</div>
          <div className={productListStyle.priceHead}>価格</div>
          <div className={productListStyle.quantityHead}>在庫数</div>
          <div className={productListStyle.optionHead}>オプション</div>
        </div>

        {registeredProducts.map((product) => (
          <Product key={product.id} product={product} setIsFlag={setIsFlag} />
        ))}
      </div>
      {isFlag ? <EditModal setIsFlag={setIsFlag} /> : ""}
    </Fragment>
  );
}

export default ProductList;
