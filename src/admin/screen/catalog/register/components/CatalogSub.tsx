import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import InputContainer from "@/parts/InputContainer.tsx";
import PullDown from "@/parts/PullDown.tsx";
import { Fragment } from "react";

function CatalogSub() {
  const { prodRegisterQuery } = useProdRegistrationStore();

  return (
    <Fragment>
      <InputContainer
        label={"sub"}
        title={"サブ商品"}
        inputElement={
          <PullDown
            label={"sub"}
            guide={"サブ商品を選択"}
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

export default CatalogSub;
