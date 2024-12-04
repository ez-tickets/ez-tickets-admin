import Input from "@/parts/Input.tsx";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment } from "react";

type ProdNameProps = {
  prodName: string;
  setProdName: (prodName: string) => void;
};

function ProdName({ prodName, setProdName }: ProdNameProps) {
  return (
    <Fragment>
      <InputContainer
        label={"name"}
        title={"商品名"}
        inputElement={
          <Input
            guide={"登録する商品名を入力"}
            type={"text"}
            label={"name"}
            required={true}
            value={prodName}
            executeHandler={setProdName}
          />
        }
      />
    </Fragment>
  );
}

export default ProdName;
