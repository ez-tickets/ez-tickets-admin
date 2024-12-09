import Input from "@/parts/Input.tsx";
import InputContainer from "@/parts/InputContainer.tsx";

type ProdNameProps = {
  prodName: string;
  setProdName: (name: string) => void;
};

function ProdName({ prodName, setProdName }: ProdNameProps) {
  return (
    <InputContainer
      label={"name"}
      title={"商品名"}
      inputElement={
        <Input
          guide={"登録する商品名を入力"}
          type={"text"}
          label={"name"}
          required={true}
          value={prodName}
          executeHandler={setProdName}
        />
      }
    />
  );
}

export default ProdName;
