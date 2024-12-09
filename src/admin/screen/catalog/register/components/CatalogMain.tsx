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
    setSelectItemId("");
  };

  return (
    <Fragment>
      <InputContainer
        title={"メイン商品"}
        inputElement={
          <Fragment>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "3rem 0",
              }}
            >
              <ExecuteButton
                name={"メイン商品選択"}
                style={executeButtonStyle.default}
                executeHandler={() => {
                  setToggleModal(true);
                  setRegistArray(main);
                }}
              />
            </div>

            <div
              style={{
                margin: "auto",
                width: "300px",
                maxHeight: "8.75rem",
                overflowY: "scroll",
                boxShadow: "2px 2px 3px lightgray",
              }}
            >
              {main.map((item) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.5rem",
                    border: "1px solid lightgray",
                  }}
                  key={item.id}
                >
                  <p>{item.name}</p>
                  <p>{item.price}円</p>
                </div>
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
                <div key={prod.id}
                     className={catalogMainStyle.item}
                >
                  {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                  <p
                    className={catalogMainStyle.itemName}
                    onClick={() => setSelectItemId(prod.id)}
                  >
                    {prod.name}
                  </p>

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
                      <span style={{ marginLeft: "0.4rem" }}>
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
                      setSelectItemId("");
                      setMainPrice(0);
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
