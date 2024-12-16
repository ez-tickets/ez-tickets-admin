import EditProdModal from "@/admin/screen/product/components/EditProdModal.tsx";
import RegisterProdModal from "@/admin/screen/product/components/RegisterProdModal.tsx";
import RegisteredProducts from "@/admin/screen/product/components/RegisteredProducts.tsx";
import { registeredProductListStyle } from "@/admin/screen/product/components/style/RegisteredProductList.css.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ListContainer from "@/parts/ListContainer.tsx";
import ListHeader from "@/parts/ListHeader.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment, useState } from "react";

function RegisteredProductList() {
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
                <div className={registeredProductListStyle.img}>画像</div>
                <div className={registeredProductListStyle.name}>商品名</div>
              </Fragment>
            }
          />
        }
        lists={
          <RegisteredProducts
            setEditModal={setEditModal}
            toggleModal={toggleModal}
          />
        }
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

export default RegisteredProductList;
