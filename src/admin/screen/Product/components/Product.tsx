import OptionViewButton from "@/admin/screen/Product/components/OptionViewButton.tsx";
import ProductOptions from "@/admin/screen/Product/components/ProductOptions.tsx";
import { productStyle } from "@/admin/screen/Product/components/style/Product.css.ts";
import type { RegisterProduct } from "@/types.ts";
import { Fragment, useState } from "react";
import { create } from "zustand/react";

type ProductProps = {
  product: RegisterProduct;
  setIsFlag: (isFlag: boolean) => void;
};

type EditProduct = {
  product: RegisterProduct | null;
  setProduct: (product: RegisterProduct) => void;
};

export const useEditProductStore = create<EditProduct>()((set) => ({
  product: null,
  setProduct: (prod: RegisterProduct) => set({ product: prod }),
}));

function Product({ product, setIsFlag }: ProductProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { setProduct } = useEditProductStore();

  const modalHandler = () => {
    setProduct(product);
    setIsFlag(true);
  };

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
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div className={productStyle.prodName} onClick={modalHandler}>
          {product.prod.name}
        </div>
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
