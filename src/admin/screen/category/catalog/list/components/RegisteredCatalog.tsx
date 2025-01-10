import { registeredCatalogStyle } from "@/admin/screen/category/catalog/list/components/style/RegisteredCatalog.css.ts";
import { useEditCatalogStore } from "@/admin/store/RegisteredEditStore.ts";
import { useCatalogRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import ListItem from "@/parts/ListItem.tsx";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment } from "react";

type RegisteredCatalogProps = {
  //todo: 構造
  id: string;
  name: string;
  desc: string;
  price: number;
  path: string;
  setEditModal: (flag: boolean) => void;
};

function RegisteredCatalog({
  id,
  name,
  desc,
  price,
  path,
  setEditModal,
}: RegisteredCatalogProps) {
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
            <div className={registeredCatalogStyle.imgContainer}>
              {path !== "" ? (
                <img
                  src={convertFileSrc(path)}
                  alt={path}
                  className={registeredCatalogStyle.img}
                />
              ) : (
                <div className={registeredCatalogStyle.img} />
              )}
            </div>
            <div className={registeredCatalogStyle.name}>{name}</div>
            <div className={registeredCatalogStyle.desc}>{desc}</div>
            <div className={registeredCatalogStyle.price}>
              {price.toLocaleString()}
            </div>
          </Fragment>
        }
        executeHandler={() => openEditModalHandler(id)}
      />
    </Fragment>
  );
}

export default RegisteredCatalog;
