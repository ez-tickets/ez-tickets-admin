import EditCategoryModal from "@/admin/screen/catalog/category/components/EditCategoryModal.tsx";
import RegisterCategoryModal from "@/admin/screen/catalog/category/components/RegisterCategoryModal.tsx";
import RegisteredCategories from "@/admin/screen/catalog/category/components/RegisteredCategories.tsx";
import { registeredCategoryListStyle } from "@/admin/screen/catalog/category/components/style/RegisteredCategoryList.css.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ListContainer from "@/parts/ListContainer.tsx";
import ListHeader from "@/parts/ListHeader.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment, useState } from "react";

function RegisteredCategoryList() {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);

  return (
    <Fragment>
      <ListContainer
        title={"カテゴリー"}
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
              <div className={registeredCategoryListStyle.name}>
                カテゴリー名
              </div>
            }
          />
        }
        lists={
          <RegisteredCategories
            setEditModal={setEditModal}
            toggleModal={toggleModal}
          />
        }
      />

      <RegisterCategoryModal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      />

      {editModal ? (
        <EditCategoryModal editModal={editModal} setEditModal={setEditModal} />
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default RegisteredCategoryList;
