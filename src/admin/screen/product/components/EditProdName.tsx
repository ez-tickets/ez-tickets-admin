import Input from "@/parts/Input.tsx";
import InputContainer from "@/parts/InputContainer.tsx";

type EditNameProps = {
  editName: string;
  setEditName: (name: string) => void;
};

function EditProdName({ editName, setEditName }: EditNameProps) {
  return (
    <InputContainer
      label={"name"}
      title={"商品名"}
      inputElement={
        <Input
          guide={"商品名を編集"}
          type={"text"}
          label={"name"}
          required={true}
          value={editName}
          executeHandler={setEditName}
        />
      }
    />
  );
}

export default EditProdName;
