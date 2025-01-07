import { editCatalogMainStyle } from "@/admin/screen/category/catalog/edit/components/style/EditCatalogMain.css.ts";
import SelectModal from "@/admin/screen/modal/selectModal/SelectModal.tsx";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import InputContainer from "@/parts/InputContainer.tsx";
import type { RegisterItem, RegisterProd } from "@/types.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment, useState } from "react";

type CatalogMainProps = {
  main: RegisterItem;
  setMain: (main: RegisterItem) => void;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
};

function EditCatalogMain({
  main,
  setMain,
  setImgPath,
  setImage,
}: CatalogMainProps) {
  const { prodRegisterQuery } = useProdRegistrationStore();
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const registerHandler = (prod: RegisterProd) => {
    const registerValue = { id: prod.id, name: prod.name };
    setImgPath(prod.img);
    setImage(convertFileSrc(prod.img));
    setMain(registerValue);
    setToggleModal(false);
  };

  return (
    <Fragment>
      <InputContainer
        title={"メイン商品"}
        inputElement={
          <Fragment>
            <div className={editCatalogMainStyle.container}>
              <div className={editCatalogMainStyle.selectContainer}>
                <p className={editCatalogMainStyle.require}>（必須）</p>
                <button
                  type={"button"}
                  className={editCatalogMainStyle.selectButton}
                  onClick={() => setToggleModal(true)}
                >
                  メイン商品選択
                </button>
              </div>
              <div className={editCatalogMainStyle.selectedMain}>
                {main.name}
              </div>
            </div>
          </Fragment>
        }
      />

      <SelectModal
        modalTitle={"メイン商品を編集"}
        toggleModal={toggleModal}
        closeHandler={() => setToggleModal(false)}
        parts={
          <Fragment>
            {prodRegisterQuery.map((prod) => {
              return (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <div
                  key={prod.id}
                  className={editCatalogMainStyle.item}
                  onClick={() => registerHandler(prod)}
                >
                  {prod.name}
                </div>
              );
            })}
          </Fragment>
        }
      />
    </Fragment>
  );
}

export default EditCatalogMain;
