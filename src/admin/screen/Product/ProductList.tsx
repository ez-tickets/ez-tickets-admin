import { productListStyle } from "@/admin/screen/Product/ProductList.css.ts";
import { registeredProducts } from "@/mockData.ts";
import { Fragment } from "react";

function ProductList() {
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
          <div className={productListStyle.prodDetails} key={product.id}>
            <div className={productListStyle.prodName}>{product.prod.name}</div>
            <div className={productListStyle.prodPrice}>
              {product.prod.price.toLocaleString()}
            </div>
            <div className={productListStyle.prodQuantity}>
              {product.prod.quantity.toLocaleString()}
            </div>
            <div className={productListStyle.prodOption}>
              {product.options.map((option) => (
                <p className={productListStyle.option} key={option.id}>
                  {option.name}
                  <span className={productListStyle.optionPrice}>
                    {option.price.toLocaleString()}
                  </span>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default ProductList;
