import Input from "@/parts/Input.tsx";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment } from "react";

type CatalogPriceProps = {
  price: number;
  setPrice: (price: number) => void;
};

function EditCatalogPrice({ price, setPrice }: CatalogPriceProps) {
  const inputPriceHandler = (e: string) => {
    const value = Number(e);
    // biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
    if (isNaN(value) || value < 0) return;
    setPrice(value);
  };

  return (
    <Fragment>
      <InputContainer
        label={"price"}
        title={"価格"}
        inputElement={
          <Input
            guide={"カタログ価格を編集"}
            type={"text"}
            label={"price"}
            required={true}
            value={price}
            executeHandler={(e) => inputPriceHandler(e)}
          />
        }
      />
    </Fragment>
  );
}

export default EditCatalogPrice;
