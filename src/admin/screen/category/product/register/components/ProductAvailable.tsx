import CheckBox from "@/parts/CheckBox.tsx";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment } from "react";

type ProductAvailableProps = {
  available: boolean;
  setAvailable: (flag: boolean) => void;
};

function ProductAvailable({ available, setAvailable }: ProductAvailableProps) {
  return (
    <Fragment>
      <InputContainer
        title={"販売可否"}
        inputElement={
          <CheckBox check={available} executeHandler={setAvailable} />
        }
      />
    </Fragment>
  );
}

export default ProductAvailable;
