import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { useCatalogRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { deleteCatalog } from "@/admin/store/action/CatalogRegistrationAction.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import type { EditProduct } from "@/types.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment, useState } from "react";

type EditProdActionButtonProps = {
  editCatalog: EditProduct; //todo
  name: string;
  category: string | null;
  desc: string;
  price: number;
  imgPath: string;
  setName: (name: string) => void;
  setCategory: (category: string) => void;
  setDesc: (desc: string) => void;
  setPrice: (price: number) => void;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
  setEditModal: (flag: boolean) => void;
};

function EditProdActionButton({
  editCatalog,
  name,
  category,
  desc,
  price,
  imgPath,
  setName,
  setCategory,
  setDesc,
  setPrice,
  setImgPath,
  setImage,
  setEditModal,
}: EditProdActionButtonProps) {
  const { catalogRegisterDispatcher } = useCatalogRegistrationStore();
  const [modalView, setModalView] = useState<boolean>(false);
  const [taskType, setTaskType] = useState<string>("");
  const [executeHandler, setExecuteHandler] = useState<() => void>();

  const resetHandler = () => {
    setName(editCatalog.name);
    setCategory(""); //todo: 初期値を入力※型が違うからまだ処理できない
    setDesc(editCatalog.desc);
    setPrice(editCatalog.price);
    setImgPath(editCatalog.path);
    setImage(convertFileSrc(editCatalog.path));
  };

  const deleteHandler = () => {
    //todo: データ削除API
    catalogRegisterDispatcher(deleteCatalog(editCatalog.id));
  };

  const updateHandler = () => {
    //todo: データ更新API
    const registerCatalogValue = {
      name: name,
      category: category,
      desc: desc,
      price: price,
      img: imgPath,
    };

    setName("");
    setCategory("");
    setDesc("");
    setPrice(0);
    setImgPath("");
    setImage("");
    setModalView(false);
    setEditModal(false);
  };

  const openModalHandler = (type: string) => {
    if (
      name !== "" &&
      category !== "" &&
      desc !== "" &&
      price !== 0 &&
      imgPath !== ""
    ) {
      switch (type) {
        case confirmAction.UPDATE:
          setTaskType(confirmAction.UPDATE);
          setExecuteHandler(() => updateHandler);
          break;
        case confirmAction.DELETE:
          setTaskType(confirmAction.DELETE);
          setExecuteHandler(() => deleteHandler);
          break;
      }
      setModalView(true);
    }
  };

  return (
    <Fragment>
      <ExecuteButtonContainer
        button={
          <Fragment>
            <ExecuteButton
              name={"リセット"}
              style={executeButtonStyle.editModalReset}
              executeHandler={resetHandler}
            />
            <ExecuteButton
              name={"更新する"}
              style={executeButtonStyle.editModalUpdate}
              executeHandler={() => openModalHandler(confirmAction.UPDATE)}
            />
            <ExecuteButton
              name={"削除する"}
              style={executeButtonStyle.editModalDelete}
              executeHandler={() => openModalHandler(confirmAction.DELETE)}
            />
          </Fragment>
        }
      />

      <ConfirmModal
        taskType={taskType}
        executeHandler={executeHandler}
        modalView={modalView}
        setModalView={setModalView}
        setEditModal={setEditModal}
      />
    </Fragment>
  );
}

export default EditProdActionButton;
