import Input from "@/parts/Input.tsx";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment } from "react";

type EditCatalogDescProps = {
  desc: string;
  setDesc: (desc: string) => void;
};

function EditCatalogDesc({ desc, setDesc }: EditCatalogDescProps) {
  return (
    <Fragment>
      <InputContainer
        label={"desc"}
        title={"説明"}
        inputElement={
          <Input
            guide={"カタログ説明を編集"}
            type={"text"}
            label={"desc"}
            required={true}
            value={desc}
            executeHandler={setDesc}
          />
        }
      />
    </Fragment>
  );
}

export default EditCatalogDesc;
