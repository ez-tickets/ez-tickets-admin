import ProdEditModal from "@/admin/screen/register/list/components/ProdEditModal.tsx";
import { registeredProductStyle } from "@/admin/screen/register/list/components/style/RegisteredProduct.css.ts";
import { useEditProductStore } from "@/admin/store/RegisteredEditStore.ts";
import { useProdRegistrationStore } from "@/admin/store/RegistrationStore.ts";
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
    prodRegisterQuery.map((prod) => (prod.id === id ? setEditProd(prod) : ""));
    setEditModal(true);
  };

  return (
    <Fragment>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={registeredProductStyle.prodItem}
        onClick={() => openEditModalHandler(id)}
      >
        <div className={registeredProductStyle.prodPath}>
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
        <div className={registeredProductStyle.prodName}>{name}</div>
        <div className={registeredProductStyle.prodPrice}>
          {price.toLocaleString()}
        </div>
      </div>

      {editModal ? (
        <ProdEditModal editModal={editModal} setEditModal={setEditModal} />
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default RegisteredProduct;
