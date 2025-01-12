import InputContainer from "@/parts/InputContainer.tsx";
import TextArea from "@/parts/TextArea.tsx";
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
          <TextArea
            guide={"説明を入力"}
            label={"desc"}
            value={desc}
            executeHandler={setDesc}
          />
        }
      />
    </Fragment>
  );
}

export default ProductDesc;
