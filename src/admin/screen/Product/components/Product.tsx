import OptionViewButton from "@/admin/screen/Product/components/OptionViewButton.tsx";
import ProductOptions from "@/admin/screen/Product/components/ProductOptions.tsx";
import { productStyle } from "@/admin/screen/Product/components/style/Product.css.ts";
import type { RegisterProduct } from "@/types.ts";
import { Fragment, useState } from "react";

type ProductProps = {
  product: RegisterProduct;
};

function Product({ product }: ProductProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const optionToggleHandler = (id: string) => {
    const newSelectedIds = selectedIds.filter((incId) => incId !== id);
    if (selectedIds.includes(id)) {
      setSelectedIds(newSelectedIds);
    }
  };

  return (
    <Fragment>
      {/*biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>*/}
      <div
        className={productStyle.prodDetails}
        key={product.id}
        onClick={() => optionToggleHandler(product.id)}
      >
        <div className={productStyle.prodName}>{product.prod.name}</div>
        <div className={productStyle.prodPrice}>
          {product.prod.price.toLocaleString()}
        </div>
        <div className={productStyle.prodQuantity}>
          {product.prod.quantity.toLocaleString()}
        </div>

        <div className={productStyle.prodOption}>
          {selectedIds.includes(product.id) ? (
            <ProductOptions options={product.options} />
          ) : (
            <OptionViewButton
              product={product}
              setSelectedIds={setSelectedIds}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Product;
