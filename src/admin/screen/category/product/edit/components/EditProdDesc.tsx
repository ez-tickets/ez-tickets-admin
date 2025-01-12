import InputContainer from "@/parts/InputContainer.tsx";
import TextArea from "@/parts/TextArea.tsx";
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
          <TextArea
            guide={"説明を編集"}
            label={"desc"}
            value={desc}
            executeHandler={setDesc}
          />
        }
      />
    </Fragment>
  );
}

export default EditProdDesc;
