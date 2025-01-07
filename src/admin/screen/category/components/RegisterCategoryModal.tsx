import CategoryActionButton from "@/admin/screen/category/components/CategoryActionButton.tsx";
import CategoryName from "@/admin/screen/category/components/CategoryName.tsx";
import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import { Fragment, useState } from "react";

type CategoryRegisterModalProps = {
  toggleModal: boolean;
  setToggleModal: (flag: boolean) => void;
};

function RegisterCategoryModal({
  toggleModal,
  setToggleModal,
}: CategoryRegisterModalProps) {
  const [categoryName, setCategoryName] = useState<string>("");

  return (
    <Fragment>
      <ManageEntryModal
        modalTitle={"新規登録"}
        toggleModal={toggleModal}
        closeHandler={() => setToggleModal(false)}
        parts={
          <Fragment>
            <CategoryName
              categoryName={categoryName}
              setCategoryName={setCategoryName}
            />
            <CategoryActionButton
              categoryName={categoryName}
              setCategoryName={setCategoryName}
              setToggleModal={setToggleModal}
            />
          </Fragment>
        }
      />
    </Fragment>
  );
}

export default RegisterCategoryModal;
