import EditProdModal from "@/admin/screen/category/product/edit/EditProdModal.tsx";
import RegisteredProds from "@/admin/screen/category/product/list/components/RegisteredProds.tsx";
import { registeredProdListStyle } from "@/admin/screen/category/product/list/components/style/RegisteredProdList.css.ts";
import RegisterProdModal from "@/admin/screen/category/product/register/RegisterProdModal.tsx";
import {fetchProductsInCategory, type ProductInCategory} from "@/cmds/products.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ListContainer from "@/parts/ListContainer.tsx";
import ListHeader from "@/parts/ListHeader.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {useQuery} from "@tanstack/react-query";

type RegisteredProdListProps = {
  categoryID: string;
  categoryName: string;
};

function RegisteredProdList({
  categoryID,
  categoryName,
}: RegisteredProdListProps) {
  const { isLoading, data: filtered } = useQuery({
    queryKey: ["products_in_category", categoryID],
    queryFn: async () => await fetchProductsInCategory(categoryID),
  });

  if (isLoading) return (<div>Loading...</div>);
  if (!filtered) return (<div>データがありません</div>);

  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [isAvailableToggle, setIsAvailableToggle] = useState<boolean>(false); //button切り替え

  // const [products, setProducts] = useState<ProductInCategory[]>(); //取得商品を格納するstate

  // // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  // useEffect(() => {
  //   (async () => {
  //     //todo: categoryIDを使ってfetchProductsを呼び出す
  //     const products = await fetchProducts();
  //     products.sort((a, b) => a.order - b.order);
  //     setProducts(products);
  //   })();
  // }, [products]);

  const changedAvailableUpdateHandler = async () => {
    //todo: updatedProductsをサーバーに渡してデータを再取得する (API待ち)
    // const updatedProducts = await;
    // setProducts(updatedProducts);
    setIsAvailableToggle(!isAvailableToggle);
    toast.success("販売状態が更新されました。");
  };

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
                executeHandler={changedAvailableUpdateHandler}
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
            products={filtered}
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
