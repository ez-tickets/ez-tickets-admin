import Input from "@/parts/Input.tsx";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment } from "react";

type CatalogName = {
  name: string;
  setName: (name: string) => void;
};

function CatalogName({ name, setName }: CatalogName) {
  return (
    <Fragment>
      <InputContainer
        label={"name"}
        title={"カタログ名"}
        inputElement={
          <Input
            guide={"カタログ名を入力"}
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
