import Input from "@/parts/Input.tsx";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment } from "react";

type EditProdNameProps = {
  name: string;
  setName: (name: string) => void;
};

function CatalogName({ name, setName }: EditProdNameProps) {
  return (
    <Fragment>
      <InputContainer
        label={"name"}
        title={"商品名"}
        inputElement={
          <Input
            guide={"商品名を編集"}
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

export default CatalogName;
