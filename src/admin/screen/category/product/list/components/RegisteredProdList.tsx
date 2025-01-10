import EditProdModal from "@/admin/screen/category/product/edit/EditProdModal.tsx";
import RegisteredProds from "@/admin/screen/category/product/list/components/RegisteredProds.tsx";
import { registeredProdListStyle } from "@/admin/screen/category/product/list/components/style/RegisteredProdList.css.ts";
import RegisterProdModal from "@/admin/screen/category/product/register/RegisterProdModal.tsx";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import ListContainer from "@/parts/ListContainer.tsx";
import ListHeader from "@/parts/ListHeader.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment, useState } from "react";

function RegisteredProdList() {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);

  return (
    <Fragment>
      <ListContainer
        title={"カタログ一覧"}
        buttonElement={
          <ExecuteButtonContainer
            button={
              <Fragment>
                <ExecuteButton
                  name={"新規登録"}
                  style={executeButtonStyle.default}
                  executeHandler={() => setToggleModal(true)}
                />
              </Fragment>
            }
          />
        }
        headerContainer={
          <ListHeader
            headers={
              <Fragment>
                <div className={registeredProdListStyle.img}>画像</div>
                <div className={registeredProdListStyle.name}>カタログ名</div>
                <div className={registeredProdListStyle.desc}>説明</div>
                <div className={registeredProdListStyle.price}>価格</div>
              </Fragment>
            }
          />
        }
        lists={<RegisteredProds setEditModal={setEditModal} />}
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

export default RegisteredProdList;
