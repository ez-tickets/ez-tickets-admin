import ManageEntryModal from "@/admin/screen/modal/manageEntryModal/ManageEntryModal.tsx";
import ProdActiveButton from "@/admin/screen/product/components/ProdActiveButton.tsx";
import ProdImg from "@/admin/screen/product/components/ProdImg.tsx";
import ProdName from "@/admin/screen/product/components/ProdName.tsx";
import { Fragment, useState } from "react";

type PRodRegisterModalProps = {
  toggleModal: boolean;
  setToggleModal: (flag: boolean) => void;
};

function RegisterProdModal({
  toggleModal,
  setToggleModal,
}: PRodRegisterModalProps) {
  const [prodName, setProdName] = useState<string>("");
  const [prodImgPath, setProdImgPath] = useState<string>("");
  const [image, setImage] = useState<string>("");

  return (
    <ManageEntryModal
      modalTitle={"新規登録"}
      toggleModal={toggleModal}
      closeHandler={() => setToggleModal(false)}
      parts={
        <Fragment>
          <ProdName prodName={prodName} setProdName={setProdName} />
          <ProdImg
            prodImgPath={prodImgPath}
            setProdImgPath={setProdImgPath}
            image={image}
            setImage={setImage}
          />

          <ProdActiveButton
            prodName={prodName}
            prodImgPath={prodImgPath}
            setProdName={setProdName}
            setProdImgPath={setProdImgPath}
            setImage={setImage}
            setToggleModal={setToggleModal}
          />
        </Fragment>
      }
    />
  );
}

export default RegisterProdModal;
