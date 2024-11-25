import { categoryNameStyle } from "@/admin/screen/Register/Category/components/style/CategoryName.css.ts";
import { Fragment } from "react";

type CategoryNameProps = {
  categoryName: string;
  setCategoryName: (categoryName: string) => void;
};

function CategoryName({ categoryName, setCategoryName }: CategoryNameProps) {
  return (
    <Fragment>
      <div className={categoryNameStyle.inputContainer}>
        <div className={categoryNameStyle.title}>
          <label htmlFor="category">カテゴリー名</label>
        </div>
        <div className={categoryNameStyle.input}>
          <input
            type={"text"}
            id={"category"}
            value={categoryName}
            className={categoryNameStyle.value}
            placeholder={"登録するカテゴリー名を入力"}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default CategoryName;
