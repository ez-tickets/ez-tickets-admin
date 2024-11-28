import Input from "@/admin/components/Input.tsx";
import InputContainer from "@/admin/components/InputContainer.tsx";
import { Fragment } from "react";

type EditPriceProps = {
  editPrice: number;
  setEditPrice: (price: number) => void;
};

function EditPrice({ editPrice, setEditPrice }: EditPriceProps) {
  const inputPriceHandler = (input: string) => {
    const value = Number(input);
    // biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
    if (isNaN(value) || value < 0) return;
    setEditPrice(value);
  };

  return (
    <Fragment>
      <InputContainer
        label={"price"}
        title={"価格"}
        inputElement={
          <Input
            guide={"商品価格を編集 (半角）"}
            type={"text"}
            label={"price"}
            value={editPrice}
            executeHandler={inputPriceHandler}
          />
        }
      />
    </Fragment>
  );
}

export default EditPrice;
