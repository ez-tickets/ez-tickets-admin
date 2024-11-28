import Input from "@/admin/components/Input.tsx";
import InputContainer from "@/admin/components/InputContainer.tsx";
import { Fragment } from "react";

type EditNameProps = {
  editName: string;
  setEditName: (name: string) => void;
};

function EditName({ editName, setEditName }: EditNameProps) {
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
            value={editName}
            executeHandler={setEditName}
          />
        }
      />
    </Fragment>
  );
}

export default EditName;
