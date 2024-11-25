import { registeredCategoryStyle } from "@/admin/screen/Register/List/components/style/RegisteredCategory.css.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

type RegisteredCategoryProps = {
  category: string;
};

function RegisteredCategory({ category }: RegisteredCategoryProps) {
  return (
    <Fragment>
      <div className={registeredCategoryStyle.categoryItem}>
        <div className={registeredCategoryStyle.category}>
          <Link to={"#"}>{category}</Link>
        </div>
      </div>
    </Fragment>
  );
}

export default RegisteredCategory;
