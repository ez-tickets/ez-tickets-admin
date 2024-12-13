import { registeredCatalogStyle } from "@/admin/screen/catalog/list/components/style/RegisteredCatalog.css.ts";
import { useEditCatalogStore } from "@/admin/store/RegisteredEditStore.ts";
import { useCatalogRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import ListItem from "@/parts/ListItem.tsx";
import type { RegisterItem } from "@/types.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment } from "react";

type RegisteredCatalogProps = {
  id: string;
  name: string;
  desc: string;
  price: number;
  img: string;
  main: RegisterItem;
  setEditModal: (flag: boolean) => void;
};

function RegisteredCatalog({
  id,
  name,
  desc,
  price,
  img,
  main,
  setEditModal,
}: RegisteredCatalogProps) {
  const { catalogRegisterQuery } = useCatalogRegistrationStore();
  const { setEditCatalog } = useEditCatalogStore();

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
              {img !== "" ? (
                <img
                  src={convertFileSrc(img)}
                  alt={img}
                  className={registeredCatalogStyle.img}
                />
              ) : (
                <div className={registeredCatalogStyle.img} />
              )}
            </div>
            <div className={registeredCatalogStyle.name}>{name}</div>
            <div className={registeredCatalogStyle.main}>{main.name}</div>
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
