import { registeredProductStyle } from "@/admin/screen/product/components/style/RegisteredProduct.css.ts";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import ListItem from "@/parts/ListItem.tsx";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment } from "react";

type RegisteredProductProps = {
  id: string;
  name: string;
  path: string;
  setEditModal: (flag: boolean) => void;
};

function RegisteredProduct({
  id,
  name,
  path,
  setEditModal,
}: RegisteredProductProps) {
  const { prodRegisterQuery } = useProdRegistrationStore();
  const { setEditProd } = useEditProductStore();

  const openEditModalHandler = (id: string) => {
    for (const prod of prodRegisterQuery.filter(
      (category) => category.id === id,
    )) {
      setEditProd(prod);
    }
    setEditModal(true);
  };

  return (
    <Fragment>
      <ListItem
        block={
          <Fragment>
            <div className={registeredProductStyle.imgContainer}>
              {path !== "" ? (
                <img
                  src={convertFileSrc(path)}
                  alt={path}
                  className={registeredProductStyle.img}
                />
              ) : (
                <div className={registeredProductStyle.img} />
              )}
            </div>
            <div className={registeredProductStyle.name}>{name}</div>
          </Fragment>
        }
        executeHandler={() => openEditModalHandler(id)}
      />
    </Fragment>
  );
}

export default RegisteredProduct;
