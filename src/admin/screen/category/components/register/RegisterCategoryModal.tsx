import CategoryActionButton from "@/admin/screen/category/components/register/CategoryActionButton.tsx";
import CategoryName from "@/admin/screen/category/components/register/CategoryName.tsx";
import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import { useCategoryModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { Fragment, useState } from "react";

function RegisterCategoryModal() {
  const { registerModalFlag, changeRegisterModalFlag } =
    useCategoryModalStateStore();
  const [categoryName, setCategoryName] = useState<string>("");

  const closeHandler = () => {
    setCategoryName("");
    changeRegisterModalFlag(false);
  };

  return (
    <Fragment>
      <ManageEntryModal
        modalTitle={"新規登録"}
        toggleModal={registerModalFlag}
        closeHandler={closeHandler}
        parts={
          <Fragment>
            <CategoryName
              categoryName={categoryName}
              setCategoryName={setCategoryName}
            />
            <CategoryActionButton
              categoryName={categoryName}
              setCategoryName={setCategoryName}
            />
          </Fragment>
        }
      />
    </Fragment>
  );
}

export default RegisterCategoryModal;
