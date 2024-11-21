import { optionViewButtonStyle } from "@/admin/screen/Product/components/style/OptionViewButton.css.ts";
import type { RegisterProduct } from "@/types.ts";
import { Fragment } from "react";

type OptionViewButtonProps = {
  product: RegisterProduct;
  setSelectedIds: (ids: (prev: string[]) => string[]) => void;
};

function OptionViewButton({ product, setSelectedIds }: OptionViewButtonProps) {
  return (
    <Fragment>
      <button
        type={"button"}
        className={optionViewButtonStyle.optionButton}
        onClick={() =>
          setSelectedIds((prev: string[]) => [...prev, product.id])
        }
      >
        {product.options.length <= 0 ? "" : <p>{product.options.length}件</p>}
      </button>
    </Fragment>
  );
}

export default OptionViewButton;
