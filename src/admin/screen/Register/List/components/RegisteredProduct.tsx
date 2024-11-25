import { registeredProductStyle } from "@/admin/screen/Register/List/components/style/RegisteredProduct.css.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

type RegisteredProductProps = {
  name: string;
  price: number;
  path: string;
};

function RegisteredProduct({ name, price, path }: RegisteredProductProps) {
  return (
    <Fragment>
      <div className={registeredProductStyle.prodItem}>
        <div className={registeredProductStyle.prodName}>
          <Link to={"#"}>{name}</Link>
        </div>
        <div className={registeredProductStyle.prodPrice}>
          {price.toLocaleString()}
        </div>
        <div className={registeredProductStyle.prodPath}>{path}</div>
      </div>
    </Fragment>
  );
}

export default RegisteredProduct;
