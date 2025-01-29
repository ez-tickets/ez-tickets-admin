import RegisteredProds from "@/admin/screen/category/product/list/components/RegisteredProds.tsx";
import { registeredProdListStyle } from "@/admin/screen/category/product/list/components/style/RegisteredProdList.css.ts";
import { useProductModalStateStore } from "@/admin/store/ModalStateStore.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ListContainer from "@/parts/ListContainer.tsx";
import ListHeader from "@/parts/ListHeader.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment } from "react";

type RegisteredProdListProps = {
  categoryID: string;
};

function RegisteredProdList({ categoryID }: RegisteredProdListProps) {
  const { changeRegisterModalFlag } = useProductModalStateStore();

  return (
    <Fragment>
      <ListContainer
        title={"登録商品"}
        buttonElement={
          <div className={registeredProdListStyle.buttonContainer}>
            <ExecuteButton
              name={"新規登録"}
              style={executeButtonStyle.default}
              executeHandler={() => changeRegisterModalFlag(true)}
            />
          </div>
        }
        headerContainer={
          <ListHeader
            headers={
              <Fragment>
                <div className={registeredProdListStyle.img}>画像</div>
                <div className={registeredProdListStyle.name}>商品名</div>
                <div className={registeredProdListStyle.price}>価格</div>
              </Fragment>
            }
          />
        }
        lists={<RegisteredProds categoryID={categoryID} />}
      />
    </Fragment>
  );
}

export default RegisteredProdList;
