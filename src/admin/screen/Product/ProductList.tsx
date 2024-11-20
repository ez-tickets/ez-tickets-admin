import { productListStyle } from "@/admin/screen/Product/ProductList.css.ts";
import ProductOption from "@/admin/screen/Product/components/ProductOption.tsx";
import { registeredProducts } from "@/mockData.ts";
import { Fragment, useState } from "react";

function ProductList() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const optionToggleHandler = (id: string) => {
    const newSelectedIds = selectedIds.filter((incId) => incId !== id);
    if (selectedIds.includes(id)) {
      setSelectedIds(newSelectedIds);
    }
  };

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
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div
            className={productListStyle.prodDetails}
            key={product.id}
            onClick={() => optionToggleHandler(product.id)}
          >
            <div className={productListStyle.prodName}>{product.prod.name}</div>
            <div className={productListStyle.prodPrice}>
              {product.prod.price.toLocaleString()}
            </div>
            <div className={productListStyle.prodQuantity}>
              {product.prod.quantity.toLocaleString()}
            </div>

            <div className={productListStyle.prodOption}>
              {selectedIds.includes(product.id) ? (
                <ProductOption
                  productId={product.id}
                  options={product.options}
                />
              ) : (
                <button
                  className={productListStyle.optionButton}
                  type={"button"}
                  onClick={() =>
                    setSelectedIds((prev) => [...prev, product.id])
                  }
                >
                  {product.options.length}件
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default ProductList;
