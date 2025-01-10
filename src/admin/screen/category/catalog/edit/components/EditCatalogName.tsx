import Input from "@/parts/Input.tsx";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment } from "react";

type EditCatalogNameProps = {
  name: string;
  setName: (name: string) => void;
};

function CatalogName({ name, setName }: EditCatalogNameProps) {
  return (
    <Fragment>
      <InputContainer
        label={"name"}
        title={"カタログ名"}
        inputElement={
          <Input
            guide={"カタログ名を編集"}
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
