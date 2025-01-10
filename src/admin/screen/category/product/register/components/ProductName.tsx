import Input from "@/parts/Input.tsx";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment } from "react";

type ProductNameProps = {
  name: string;
  setName: (name: string) => void;
};

function ProductName({ name, setName }: ProductNameProps) {
  return (
    <Fragment>
      <InputContainer
        label={"name"}
        title={"商品名"}
        inputElement={
          <Input
            guide={"商品名を入力"}
            type={"text"}
            label={"name"}
            required={true}
            value={name}
            executeHandler={setName}
          />
        }
      />
    </Fragment>
  );
}

export default ProductName;
