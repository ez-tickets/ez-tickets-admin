import { editPriceStyle } from "@/admin/screen/Register/List/components/style/EditPrice.css.ts";
import { type ChangeEvent, Fragment } from "react";

type EditPriceProps = {
  editPrice: number;
  setEditPrice: (price: number) => void;
};

function EditPrice({ editPrice, setEditPrice }: EditPriceProps) {
  const inputPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
    if (isNaN(value) || value < 0) return;
    setEditPrice(value);
  };

  return (
    <Fragment>
      <div className={editPriceStyle.inputContainer}>
        <div className={editPriceStyle.title}>
          <label htmlFor="price">価格</label>
        </div>
        <div className={editPriceStyle.input}>
          <input
            type={"text"}
            id={"price"}
            value={editPrice}
            className={editPriceStyle.value}
            onChange={(e) => inputPriceHandler(e)}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default EditPrice;
