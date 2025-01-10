import EditCtlgModal from "@/admin/screen/category/catalog/edit/EditCtlgModal.tsx";
import RegisteredCatalogs from "@/admin/screen/category/catalog/list/components/RegisteredCatalogs.tsx";
import { registeredCatalogListStyle } from "@/admin/screen/category/catalog/list/components/style/RegisteredCatalogList.css.ts";
import RegisterCtlgModal from "@/admin/screen/category/catalog/register/RegisterCtlgModal.tsx";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import ListContainer from "@/parts/ListContainer.tsx";
import ListHeader from "@/parts/ListHeader.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment, useState } from "react";

function RegisteredCatalogList() {
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
                <div className={registeredCatalogListStyle.img}>画像</div>
                <div className={registeredCatalogListStyle.name}>
                  カタログ名
                </div>
                <div className={registeredCatalogListStyle.desc}>説明</div>
                <div className={registeredCatalogListStyle.price}>価格</div>
              </Fragment>
            }
          />
        }
        lists={<RegisteredCatalogs setEditModal={setEditModal} />}
      />

      <RegisterCtlgModal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      />

      {editModal ? (
        <EditCtlgModal editModal={editModal} setEditModal={setEditModal} />
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default RegisteredCatalogList;
