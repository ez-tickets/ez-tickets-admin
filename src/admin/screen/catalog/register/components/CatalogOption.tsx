import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import InputContainer from "@/parts/InputContainer.tsx";
import PullDown from "@/parts/PullDown.tsx";
import { Fragment } from "react";

function CatalogOption() {
  const { prodRegisterQuery } = useProdRegistrationStore();

  return (
    <Fragment>
      <InputContainer
        label={"option"}
        title={"オプション"}
        inputElement={
          <PullDown
            label={"option"}
            guide={"オプションを選択"}
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

export default CatalogOption;
