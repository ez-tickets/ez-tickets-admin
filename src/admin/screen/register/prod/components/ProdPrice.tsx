import Input from "@/components/Input.tsx";
import InputContainer from "@/components/InputContainer.tsx";
import { Fragment } from "react";

type ProdPriceProps = {
  prodPrice: number;
  setProdPrice: (prodPrice: number) => void;
};

function ProdPrice({ prodPrice, setProdPrice }: ProdPriceProps) {
  const inputPriceHandler = (input: string) => {
    const value = Number(input);
    // biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
    if (isNaN(value) || value < 0) return;
    setProdPrice(value);
  };

  return (
    <Fragment>
      <InputContainer
        label={"price"}
        title={"価格"}
        inputElement={
          <Input
            guide={"商品価格を入力 (半角）"}
            type={"text"}
            label={"price"}
            value={prodPrice}
            executeHandler={inputPriceHandler}
          />
        }
      />
    </Fragment>
  );
}

export default ProdPrice;
