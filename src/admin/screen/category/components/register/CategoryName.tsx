import Input from "@/parts/Input.tsx";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment } from "react";

type CategoryNameProps = {
  categoryName: string;
  setCategoryName: (name: string) => void;
};

function CategoryName({ categoryName, setCategoryName }: CategoryNameProps) {
  return (
    <Fragment>
      <InputContainer
        label={"category"}
        title={"カテゴリー名"}
        inputElement={
          <Input
            guide={"カテゴリー名を入力"}
            type={"text"}
            label={"category"}
            required={true}
            value={categoryName}
            executeHandler={setCategoryName}
          />
        }
      />
    </Fragment>
  );
}

export default CategoryName;
