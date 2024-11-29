import Input from "@/parts/Input.tsx";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment } from "react";

type EditCategoryProps = {
  editCategorise: string;
  setEditCategorise: (category: string) => void;
};

function EditCategory({
  editCategorise,
  setEditCategorise,
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
            value={editCategorise}
            executeHandler={setEditCategorise}
          />
        }
      />
    </Fragment>
  );
}

export default EditCategory;
