import Items from "@/admin/screen/Items/components/Items.tsx";
import { itemListStyle } from "@/admin/screen/Items/components/style/ItemList.css.ts";
import EditProdModal from "@/admin/screen/category/product/edit/EditProdModal.tsx";
import RegisterProdModal from "@/admin/screen/category/product/register/RegisterProdModal.tsx";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ListContainer from "@/parts/ListContainer.tsx";
import ListHeader from "@/parts/ListHeader.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment, useState } from "react";

function ItemList() {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);

  return (
    <Fragment>
      <ListContainer
        title={"商品"}
        buttonElement={
          <ExecuteButton
            name={"新規登録"}
            style={executeButtonStyle.default}
            executeHandler={() => setToggleModal(true)}
          />
        }
        headerContainer={
          <ListHeader
            headers={
              <Fragment>
                <div className={itemListStyle.img}>画像</div>
                <div className={itemListStyle.name}>商品名</div>
                <div className={itemListStyle.desc}>説明</div>
                <div className={itemListStyle.price}>価格</div>
              </Fragment>
            }
          />
        }
        lists={<Items setEditModal={setEditModal} />}
      />

      <RegisterProdModal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      />

      {editModal ? (
        <EditProdModal editModal={editModal} setEditModal={setEditModal} />
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default ItemList;
