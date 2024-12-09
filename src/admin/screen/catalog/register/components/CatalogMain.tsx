import { catalogMainStyle } from "@/admin/screen/catalog/register/components/style/CatalogMain.css.ts";
import SelectModal from "@/admin/screen/modal/selectModal/SelectModal.tsx";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import InputContainer from "@/parts/InputContainer.tsx";
import type { RegisterItem, RegisterProd } from "@/types.ts";
import { Fragment, useState } from "react";

type CatalogMainProps = {
  main: RegisterItem;
  setMain: (main: RegisterItem) => void;
  setImgPath: (path: string) => void;
};

function CatalogMain({ main, setMain, setImgPath }: CatalogMainProps) {
  const { prodRegisterQuery } = useProdRegistrationStore();
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const registerHandler = (prod: RegisterProd) => {
    const registerValue = { id: prod.id, name: prod.name };
    setImgPath(prod.img);
    setMain(registerValue);
    setToggleModal(false);
  };

  return (
    <Fragment>
      <InputContainer
        title={"メイン商品"}
        inputElement={
          <Fragment>
            <div className={catalogMainStyle.selectContainer}>
              <button
                type={"button"}
                className={catalogMainStyle.selectButton}
                onClick={() => setToggleModal(true)}
              >
                メイン商品選択
              </button>
              <div className={catalogMainStyle.selectedMain}>{main.name}</div>
            </div>
          </Fragment>
        }
      />

      <SelectModal
        modalTitle={"メイン商品を選択"}
        toggleModal={toggleModal}
        closeHandler={() => setToggleModal(false)}
        parts={
          <Fragment>
            {prodRegisterQuery.map((prod) => {
              return (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <div
                  key={prod.id}
                  className={catalogMainStyle.item}
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

export default CatalogMain;
