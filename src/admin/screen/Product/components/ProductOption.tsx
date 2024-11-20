import { productOptionStyle } from "@/admin/screen/Product/components/style/ProductOption.css.ts";
import type { ProdOption } from "@/types.ts";
import { Fragment } from "react";

type ProductOptionProps = {
  productId: string;
  options: ProdOption[];
};

function ProductOption({ options }: ProductOptionProps) {
  return (
    <Fragment>
      {options.length === 0 ? (
        <p>なし</p>
      ) : (
        <Fragment>
          {options.map((option) => (
            <p className={productOptionStyle.option} key={option.id}>
              {option.name}
              <span className={productOptionStyle.optionPrice}>
                {option.price.toLocaleString()}
              </span>
            </p>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
}

export default ProductOption;
