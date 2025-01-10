import { registeredProdStyle } from "@/admin/screen/category/product/list/components/style/RegisteredProd.css.ts";
import { useEditCatalogStore } from "@/admin/store/RegisteredEditStore.ts";
import { useCatalogRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import ListItem from "@/parts/ListItem.tsx";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment } from "react";

type RegisteredProdProps = {
  //todo: 構造
  id: string;
  name: string;
  desc: string;
  price: number;
  path: string;
  setEditModal: (flag: boolean) => void;
};

function RegisteredProd({
  id,
  name,
  desc,
  price,
  path,
  setEditModal,
}: RegisteredProdProps) {
  const { catalogRegisterQuery } = useCatalogRegistrationStore();
  const { setEditCatalog } = useEditCatalogStore();

  //todo: データ取得・編集
  const openEditModalHandler = (id: string) => {
    for (const catalog of catalogRegisterQuery.filter(
      (catalog) => catalog.id === id,
    )) {
      setEditCatalog(catalog);
    }
    setEditModal(true);
  };

  return (
    <Fragment>
      <ListItem
        block={
          <Fragment>
            <div className={registeredProdStyle.imgContainer}>
              {path !== "" ? (
                <img
                  src={convertFileSrc(path)}
                  alt={path}
                  className={registeredProdStyle.img}
                />
              ) : (
                <div className={registeredProdStyle.img} />
              )}
            </div>
            <div className={registeredProdStyle.name}>{name}</div>
            <div className={registeredProdStyle.desc}>{desc}</div>
            <div className={registeredProdStyle.price}>
              {price.toLocaleString()}
            </div>
          </Fragment>
        }
        executeHandler={() => openEditModalHandler(id)}
      />
    </Fragment>
  );
}

export default RegisteredProd;
