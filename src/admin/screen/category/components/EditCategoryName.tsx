import Input from "@/parts/Input.tsx";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment } from "react";

type EditCategoryProps = {
  editCategoryName: string;
  setEditCategoryName: (name: string) => void;
};

function EditCategoryName({
  editCategoryName,
  setEditCategoryName,
}: EditCategoryProps) {
  return (
    <Fragment>
      <InputContainer
        label={"category"}
        title={"カテゴリー名"}
        inputElement={
          <Input
            guide={"カテゴリー名を編集"}
            type={"text"}
            label={"category"}
            value={editCategoryName}
            executeHandler={setEditCategoryName}
          />
        }
      />
    </Fragment>
  );
}

export default EditCategoryName;
