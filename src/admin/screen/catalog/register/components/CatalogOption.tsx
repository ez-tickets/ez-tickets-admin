import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import InputContainer from "@/parts/InputContainer.tsx";
import PullDown from "@/parts/PullDown.tsx";
import { Fragment } from "react";

type CatalogOption = {
  options: string;
  setOptions: (option: string) => void;
};

function CatalogOption({ options, setOptions }: CatalogOption) {
  const { prodRegisterQuery } = useProdRegistrationStore();

  return (
    <Fragment>
      <InputContainer
        label={"option"}
        title={"オプション"}
        inputElement={
          <PullDown
            label={"option"}
            guide={"推奨オプションを複数選択"}
            value={options}
            options={
              <Fragment>
                {prodRegisterQuery.map((prod) => (
                  <option value={prod.name} key={prod.id}>
                    {prod.name}
                  </option>
                ))}
              </Fragment>
            }
            executeHandler={setOptions}
          />
        }
      />
    </Fragment>
  );
}

export default CatalogOption;
