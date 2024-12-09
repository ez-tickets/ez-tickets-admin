import { catalogMainStyle } from "@/admin/screen/catalog/register/components/style/CatalogMain.css.ts";
import SelectModal from "@/admin/screen/modal/selectModal/SelectModal.tsx";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import InputContainer from "@/parts/InputContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import type { RegisterItem, RegisterProd } from "@/types.ts";
import { Fragment, useState } from "react";

type CatalogMainProps = {
  main: RegisterItem[];
  setMain: (main: RegisterItem[]) => void;
};

function CatalogMain({ main, setMain }: CatalogMainProps) {
  const { prodRegisterQuery } = useProdRegistrationStore();

  const [mainPrice, setMainPrice] = useState<number>(0);
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [selectItemId, setSelectItemId] = useState<string>("");
  const [registArray, setRegistArray] = useState<RegisterItem[]>(main);

  const inputPriceHandler = (e: string) => {
    const value = Number(e);
    // biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
    if (isNaN(value) || value < 0) return;
    setMainPrice(value);
  };

  const registerHandler = (prod: RegisterProd) => {
    const registerValue = [
      ...registArray,
      {
        id: prod.id,
        name: prod.name,
        price: mainPrice,
      },
    ];
    const sorted = registerValue.sort((a, b) => Number(a.id) - Number(b.id));
    setRegistArray(sorted);

    setMainPrice(0);
    setSelectItemId("");
  };

  const cancelHandler = (id: string) => {
    const cancelMain = registArray.filter((item) => item.id !== id);
    setRegistArray(cancelMain);
  };

  return (
    <Fragment>
      <InputContainer
        title={"メイン商品"}
        inputElement={
          <Fragment>
            <ExecuteButton
              name={"メイン商品選択"}
              style={executeButtonStyle.default}
              executeHandler={() => {
                setToggleModal(true);
                setRegistArray(main);
              }}
            />

            <div style={{ display: "flex", flexDirection: "column" }}>
              {main.map((item) => (
                <p key={item.id}>
                  {item.name}　{item.price}
                </p>
              ))}
            </div>
          </Fragment>
        }
      />

      <SelectModal
        modalTitle={"メイン商品を選択"}
        toggleModal={toggleModal}
        closeHandler={() => {
          setToggleModal(false);
          setSelectItemId("");
        }}
        parts={
          <div className={catalogMainStyle.container}>
            {prodRegisterQuery.map((prod) => {
              const registeredMain = registArray.find(
                (item) => item.id === prod.id,
              );

              return (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <div
                  key={prod.id}
                  className={catalogMainStyle.item}
                  onClick={() => setSelectItemId(prod.id)}
                >
                  <span className={catalogMainStyle.itemName}>{prod.name}</span>

                  {prod.id === selectItemId && !registeredMain ? (
                    <div className={catalogMainStyle.addContent}>
                      <span className={catalogMainStyle.attention}>
                        上乗せする価格を入力
                      </span>
                      <input
                        className={catalogMainStyle.text}
                        value={mainPrice}
                        onChange={(e) => inputPriceHandler(e.target.value)}
                      />
                      <button
                        type={"button"}
                        className={catalogMainStyle.button}
                        onClick={() => registerHandler(prod)}
                      >
                        決定
                      </button>
                    </div>
                  ) : (
                    ""
                  )}

                  {registeredMain && (
                    <Fragment>
                      <span style={{ marginLeft: "3rem" }}>
                        {registeredMain.price}円
                      </span>
                      <button
                        type={"button"}
                        className={catalogMainStyle.cancelButton}
                        onClick={() => cancelHandler(prod.id)}
                      >
                        キャンセル
                      </button>
                    </Fragment>
                  )}
                </div>
              );
            })}

            <ExecuteButtonContainer
              button={
                <Fragment>
                  <ExecuteButton
                    name={"リセット"}
                    style={executeButtonStyle.selectModalReset}
                    executeHandler={() => {
                      setRegistArray(main);
                      setSelectItemId("");
                    }}
                  />

                  <ExecuteButton
                    name={"登録"}
                    style={executeButtonStyle.selectModalRun}
                    executeHandler={() => {
                      setMain(registArray);
                      setToggleModal(false);
                    }}
                  />
                </Fragment>
              }
            />
          </div>
        }
      />
    </Fragment>
  );
}

export default CatalogMain;
