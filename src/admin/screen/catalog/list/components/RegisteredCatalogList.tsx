import RegisteredCatalogs from "@/admin/screen/catalog/list/components/RegisteredCatalogs.tsx";
import { registeredCatalogListStyle } from "@/admin/screen/catalog/list/components/style/RegisteredCatalogList.css.ts";
import RegisterCtlgModal from "@/admin/screen/catalog/register/RegisterCtlgModal.tsx";
import EditProdModal from "@/admin/screen/product/components/EditProdModal.tsx";
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
                <div className={registeredCatalogListStyle.main}>
                  メイン商品
                </div>
                <div className={registeredCatalogListStyle.sub}>サブ商品</div>
                <div className={registeredCatalogListStyle.option}>
                  オプション
                </div>
                <div className={registeredCatalogListStyle.desc}>説明</div>
                <div className={registeredCatalogListStyle.price}>価格</div>
              </Fragment>
            }
          />
        }
        lists={<RegisteredCatalogs />}
      />

      <RegisterCtlgModal
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

export default RegisteredCatalogList;
