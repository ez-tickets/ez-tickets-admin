import ConfirmModal from "@/admin/screen/modal/confirmModal/ConfirmModal.tsx";
import { useCatalogRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import {
  deleteCatalog,
  replaceEditCatalog,
} from "@/admin/store/action/CatalogRegistrationAction.ts";
import { confirmAction } from "@/mockData.ts";
import ExecuteButton from "@/parts/ExecuteButton.tsx";
import ExecuteButtonContainer from "@/parts/ExecuteButtonContainer.tsx";
import { executeButtonStyle } from "@/parts/style/ExecuteButton.css.ts";
import type { RegisterCatalog, RegisterItem } from "@/types.ts";
import { Fragment, useState } from "react";
import { convertFileSrc } from "@tauri-apps/api/core";

type CatalogActionButtonProps = {
  editCatalog: RegisterCatalog;
  name: string;
  desc: string;
  price: number;
  imgPath: string;
  main: RegisterItem;
  setName: (name: string) => void;
  setDesc: (desc: string) => void;
  setPrice: (price: number) => void;
  setImgPath: (path: string) => void;
  setImage: (image: string) => void;
  setMain: (main: RegisterItem) => void;
  setEditModal: (flag: boolean) => void;
};

function EditCatalogActionButton({
  editCatalog,
  name,
  desc,
  price,
  imgPath,
  main,
  setName,
  setDesc,
  setPrice,
  setImgPath,
  setImage,
  setMain,
  setEditModal,
}: CatalogActionButtonProps) {
  const { catalogRegisterDispatcher } = useCatalogRegistrationStore();
  const [modalView, setModalView] = useState<boolean>(false);
  const [taskType, setTaskType] = useState<string>("");
  const [executeHandler, setExecuteHandler] = useState<() => void>();

  const resetHandler = () => {
    setName(editCatalog.name);
    setDesc(editCatalog.desc);
    setPrice(editCatalog.price);
    setImgPath(editCatalog.img);
    setImage(convertFileSrc(editCatalog.img));
    setMain(editCatalog.main);
  };

  const deleteHandler = () => {
    catalogRegisterDispatcher(deleteCatalog(editCatalog.id));
  };

  const updateHandler = () => {
    const registerCatalogValue = {
      id: editCatalog.id,
      name: name,
      desc: desc,
      price: price,
      img: imgPath,
      main: main,
    };
    //登録
    catalogRegisterDispatcher(replaceEditCatalog(registerCatalogValue));

    setName("");
    setDesc("");
    setPrice(0);
    setImgPath("");
    setImage("");
    setMain({ id: "0", name: "" });
    setModalView(false);
    setEditModal(false);
  };

  const openModalHandler = (type: string) => {
    if (
      name !== "" &&
      desc !== "" &&
      price !== 0 &&
      imgPath !== "" &&
      main.id !== "" &&
      main.name !== ""
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

export default EditCatalogActionButton;
