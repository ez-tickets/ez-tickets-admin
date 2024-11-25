import { prodNameStyle } from "@/admin/screen/Register/Prod/components/style/ProdName.css.ts";
import { Fragment } from "react";

type ProdNameProps = {
  prodName: string;
  setProdName: (prodName: string) => void;
};

function ProdName({ prodName, setProdName }: ProdNameProps) {
  return (
    <Fragment>
      <div className={prodNameStyle.inputContainer}>
        <div className={prodNameStyle.title}>
          <label htmlFor="name">商品名</label>
        </div>
        <div className={prodNameStyle.input}>
          <input
            type={"text"}
            id={"name"}
            value={prodName}
            className={prodNameStyle.value}
            placeholder={"登録する商品名を入力"}
            onChange={(e) => setProdName(e.target.value)}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default ProdName;
