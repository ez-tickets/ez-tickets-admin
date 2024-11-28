import Input from "@/admin/components/Input.tsx";
import InputContainer from "@/admin/components/InputContainer.tsx";
import { Fragment } from "react";

type CategoryNameProps = {
  categoryName: string;
  setCategoryName: (categoryName: string) => void;
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
            value={categoryName}
            executeHandler={setCategoryName}
          />
        }
      />
    </Fragment>
  );
}

export default CategoryName;
