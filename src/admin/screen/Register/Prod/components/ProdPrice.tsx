import { prodPriceStyle } from "@/admin/screen/Register/Prod/components/style/ProdPrice.css.ts";
import { type ChangeEvent, Fragment } from "react";

type ProdPriceProps = {
  prodPrice: number;
  setProdPrice: (prodPrice: number) => void;
};

function ProdPrice({ prodPrice, setProdPrice }: ProdPriceProps) {
  const inputPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
    if (isNaN(value) || value < 0) return;
    setProdPrice(value);
  };

  return (
    <Fragment>
      <div className={prodPriceStyle.inputContainer}>
        <div className={prodPriceStyle.title}>
          <label htmlFor="price">価格</label>
        </div>
        <div className={prodPriceStyle.input}>
          <input
            type={"text"}
            id={"price"}
            value={prodPrice}
            className={prodPriceStyle.value}
            onChange={(e) => inputPriceHandler(e)}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default ProdPrice;
