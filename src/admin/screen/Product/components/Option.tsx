import { optionStyle } from "@/admin/screen/Product/components/style/Option.css.ts";
import type { ProdOption } from "@/types.ts";
import { Fragment } from "react";

type OptionProps = {
  option: ProdOption;
};

function Option({ option }: OptionProps) {
  return (
    <Fragment>
      <p className={optionStyle.option} key={option.id}>
        {option.name}
        <span className={optionStyle.optionPrice}>
          {option.price.toLocaleString()}
        </span>
      </p>
    </Fragment>
  );
}

export default Option;
