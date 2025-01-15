import EditProdModal from "@/admin/screen/category/product/edit/EditProdModal.tsx";
import RegisteredProds from "@/admin/screen/category/product/list/components/RegisteredProds.tsx";
import { registeredProdListStyle } from "@/admin/screen/category/product/list/components/style/RegisteredProdList.css.ts";
import RegisterProdModal from "@/admin/screen/category/product/register/RegisterProdModal.tsx";
import { type Product, fetchProducts } from "@/cmds/products.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ListContainer from "@/parts/ListContainer.tsx";
import ListHeader from "@/parts/ListHeader.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment, useEffect, useState } from "react";

type RegisteredProdListProps = {
  categoryID: string;
  categoryName: string;
};

function RegisteredProdList({
  categoryID,
  categoryName,
}: RegisteredProdListProps) {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [isAvailableToggle, setIsAvailableToggle] = useState<boolean>(false); //button切り替え
  const [products, setProducts] = useState<Product[]>([]); //取得商品を格納するstate
  const [updateProducts, setUpdateProducts] = useState<Product[]>(products); //商品のavailableを管理するstate

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    (async () => {
      //todo: categoryIDを使ってfetchProductsを呼び出す
      const products = await fetchProducts();
      products.sort((a, b) => a.order - b.order);
      setProducts(products);
    })();
  }, [products]);

  return (
    <Fragment>
      <ListContainer
        title={"登録商品"}
        buttonElement={
          <div className={registeredProdListStyle.buttonContainer}>
            {isAvailableToggle ? (
              <ExecuteButton
                name={"確定する"}
                style={executeButtonStyle.decision}
                executeHandler={() => {
                  //todo: updatedProductsをサーバーに渡してデータを再取得する (API待ち)
                  // setProducts(updateProducts);
                  setIsAvailableToggle(!isAvailableToggle);
                }}
              />
            ) : (
              <ExecuteButton
                name={"販売状況"}
                style={executeButtonStyle.default}
                executeHandler={() => setIsAvailableToggle(!isAvailableToggle)}
              />
            )}

            <ExecuteButton
              name={"新規登録"}
              style={executeButtonStyle.default}
              executeHandler={() => setToggleModal(true)}
            />
          </div>
        }
        headerContainer={
          <ListHeader
            headers={
              <Fragment>
                <div className={registeredProdListStyle.img}>画像</div>
                <div className={registeredProdListStyle.name}>商品名</div>
                <div className={registeredProdListStyle.desc}>説明</div>
                <div className={registeredProdListStyle.price}>価格</div>
                <div className={registeredProdListStyle.saleState}>状態</div>
              </Fragment>
            }
          />
        }
        lists={
          <RegisteredProds
            categoryID={categoryID}
            products={products}
            updateProducts={updateProducts}
            isAvailableToggle={isAvailableToggle}
            setProducts={setProducts}
            setUpdateProducts={setUpdateProducts}
            setEditModal={setEditModal}
          />
        }
      />

      <RegisterProdModal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        categoryName={categoryName}
      />

      {editModal ? (
        <EditProdModal editModal={editModal} setEditModal={setEditModal} />
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default RegisteredProdList;
