import { editNameStyle } from "@/admin/screen/Register/List/components/style/EditName.css.ts";
import { Fragment } from "react";

type EditNameProps = {
  editName: string;
  setEditName: (name: string) => void;
};

function EditName({ editName, setEditName }: EditNameProps) {
  return (
    <Fragment>
      <div className={editNameStyle.inputContainer}>
        <div className={editNameStyle.title}>
          <label htmlFor="name">商品名</label>
        </div>
        <div className={editNameStyle.input}>
          <input
            type={"text"}
            id={"name"}
            value={editName}
            className={editNameStyle.value}
            placeholder={"商品名を編集"}
            onChange={(e) => setEditName(e.target.value)}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default EditName;
