import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import InputContainer from "@/parts/InputContainer.tsx";
import PullDown from "@/parts/PullDown.tsx";
import { Fragment } from "react";

function CatalogMain() {
  const { prodRegisterQuery } = useProdRegistrationStore();

  return (
    <Fragment>
      <InputContainer
        label={"main"}
        title={"メイン商品"}
        inputElement={
          <PullDown
            label={"main"}
            guide={"メイン商品を選択"}
            required={true}
            options={
              <Fragment>
                {prodRegisterQuery.map((prod) => (
                  <option value={prod.name} key={prod.id}>
                    {prod.name}
                  </option>
                ))}
              </Fragment>
            }
          />
        }
      />
    </Fragment>
  );
}

export default CatalogMain;
