import Input from "@/parts/Input.tsx";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment } from "react";

type EditProdDescProps = {
  desc: string;
  setDesc: (desc: string) => void;
};

function EditProdDesc({ desc, setDesc }: EditProdDescProps) {
  return (
    <Fragment>
      <InputContainer
        label={"desc"}
        title={"説明"}
        inputElement={
          <Input
            guide={"説明を編集"}
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

export default EditProdDesc;
