import RegisterCategoryModal from "@/admin/screen/category/components/register/RegisterCategoryModal.tsx";
import { productCategoryStyle } from "@/admin/screen/category/product/register/components/style/ProductCategory.css.ts";
import SelectModal from "@/admin/screen/modal/selectModal/SelectModal.tsx";
import { useCategoryModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { fetchCategories } from "@/cmds/categories.ts";
import InputContainer from "@/parts/InputContainer.tsx";
import { IconX } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { Fragment, useState } from "react";

type EditProdCategoryProps = {
  category: string;
  setCategory: (category: string) => void;
  setCategoryId: (id: string) => void;
};

function EditProdCategory({
  category,
  setCategory,
  setCategoryId,
}: EditProdCategoryProps) {
  const { changeRegisterModalFlag } = useCategoryModalStateStore();
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const registerHandler = (id: string, name: string) => {
    setCategoryId(id);
    setCategory(name);
    setToggleModal(false);
  };

  return (
    <Fragment>
      <InputContainer
        title={"カテゴリー"}
        inputElement={
          <Fragment>
            <div className={productCategoryStyle.container}>
              <div className={productCategoryStyle.selectContainer}>
                <button
                  type={"button"}
                  className={productCategoryStyle.selectButton}
                  onClick={() => setToggleModal(true)}
                >
                  カテゴリー選択
                </button>
              </div>
              <div className={productCategoryStyle.selectedCategory}>
                {category}
              </div>
              {category ? (
                <IconX
                  className={productCategoryStyle.x}
                  onClick={() => setCategory("")}
                />
              ) : (
                ""
              )}
            </div>
          </Fragment>
        }
      />

      <SelectModal
        modalTitle={"カテゴリーを選択"}
        toggleModal={toggleModal}
        closeHandler={() => setToggleModal(false)}
        parts={
          <div className={productCategoryStyle.modalContainer}>
            {categories?.map((category) => {
              return (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <div
                  key={category.id}
                  className={productCategoryStyle.item}
                  onClick={() => registerHandler(category.id, category.name)}
                >
                  {category.name}
                </div>
              );
            })}
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              className={productCategoryStyle.add}
              onClick={() => changeRegisterModalFlag(true)}
            >
              追加 +
            </div>
          </div>
        }
      />

      <RegisterCategoryModal />
    </Fragment>
  );
}

export default EditProdCategory;
