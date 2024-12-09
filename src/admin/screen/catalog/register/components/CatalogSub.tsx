import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import InputContainer from "@/parts/InputContainer.tsx";
import PullDown from "@/parts/PullDown.tsx";
import { Fragment } from "react";

type CatalogSubProps = {
  sub: string;
  setSub: (sub: string) => void;
};

function CatalogSub({ sub, setSub }: CatalogSubProps) {
  const { prodRegisterQuery } = useProdRegistrationStore();

  return (
    <Fragment>
      <InputContainer
        label={"sub"}
        title={"サブ商品"}
        inputElement={
          <PullDown
            label={"sub"}
            guide={"サブ商品を1つ選択"}
            value={sub}
            options={
              <Fragment>
                {prodRegisterQuery.map((prod) => (
                  <option value={prod.name} key={prod.id}>
                    {prod.name}
                  </option>
                ))}
              </Fragment>
            }
            executeHandler={setSub}
          />
        }
      />
    </Fragment>
  );
}

export default CatalogSub;
