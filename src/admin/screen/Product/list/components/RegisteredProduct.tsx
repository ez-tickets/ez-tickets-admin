import ProdEditModal from "@/admin/screen/product/list/components/ProdEditModal.tsx";
import { registeredProductStyle } from "@/admin/screen/product/list/components/style/RegisteredProduct.css.ts";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import ListItem from "@/parts/ListItem.tsx";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment, useState } from "react";

type RegisteredProductProps = {
  id: string;
  name: string;
  price: number;
  path: string;
};

function RegisteredProduct({ id, name, price, path }: RegisteredProductProps) {
  const { prodRegisterQuery } = useProdRegistrationStore();
  const { setEditProd } = useEditProductStore();
  const [editModal, setEditModal] = useState<boolean>(false);

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
            <div className={registeredProductStyle.path}>
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
            <div className={registeredProductStyle.price}>
              {price.toLocaleString()}
            </div>
          </Fragment>
        }
        executeHandler={() => openEditModalHandler(id)}
      />

      {editModal ? (
        <ProdEditModal editModal={editModal} setEditModal={setEditModal} />
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default RegisteredProduct;
