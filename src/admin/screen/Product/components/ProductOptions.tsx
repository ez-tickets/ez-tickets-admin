import Option from "@/admin/screen/Product/components/Option.tsx";
import type { ProdOption } from "@/types.ts";
import { Fragment } from "react";

type ProductOptionsProps = {
  options: ProdOption[];
};

function ProductOptions({ options }: ProductOptionsProps) {
  return (
    <Fragment>
      {options.map((option) => (
        <Option key={option.id} option={option} />
      ))}
    </Fragment>
  );
}

export default ProductOptions;
