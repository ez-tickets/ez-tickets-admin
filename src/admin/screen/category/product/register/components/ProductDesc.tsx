import Input from "@/parts/Input.tsx";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment } from "react";

type ProductDescProps = {
  desc: string;
  setDesc: (desc: string) => void;
};

function ProductDesc({ desc, setDesc }: ProductDescProps) {
  return (
    <Fragment>
      <InputContainer
        label={"desc"}
        title={"説明"}
        inputElement={
          <Input
            guide={"説明を入力"}
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

export default ProductDesc;
