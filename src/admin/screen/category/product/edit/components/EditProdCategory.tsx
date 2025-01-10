import RegisterCategoryModal from "@/admin/screen/category/components/register/RegisterCategoryModal.tsx";
import { productCategoryStyle } from "@/admin/screen/category/product/register/components/style/ProductCategory.css.ts";
import SelectModal from "@/admin/screen/modal/selectModal/SelectModal.tsx";
import { type Category, fetchCategories } from "@/cmds/categories.ts";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment, useEffect, useState } from "react";

type EditProdCategoryProps = {
  category: string | null;
  setCategory: (category: string) => void;
};

function EditProdCategory({ category, setCategory }: EditProdCategoryProps) {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [categoryModal, setCategoryModal] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const registerHandler = (id: string) => {
    const selectedCategory = categories.find((category) => category.id === id);
    if (selectedCategory) {
      setCategory(selectedCategory.name);
    }
    setToggleModal(false);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    (async () => {
      const categories = await fetchCategories();
      categories.sort((a, b) => a.order - b.order);
      setCategories(categories);
    })();
  }, [categories]);

  return (
    <Fragment>
      <InputContainer
        title={"カテゴリー"}
        inputElement={
          <Fragment>
            <div className={productCategoryStyle.container}>
              <div className={productCategoryStyle.selectContainer}>
                <p className={productCategoryStyle.require}>（必須）</p>
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
            {categories.map((category) => {
              return (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <div
                  key={category.id}
                  className={productCategoryStyle.item}
                  onClick={() => registerHandler(category.id)}
                >
                  {category.name}
                </div>
              );
            })}
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              className={productCategoryStyle.add}
              onClick={() => setCategoryModal(true)}
            >
              追加 +
            </div>
          </div>
        }
      />

      <RegisterCategoryModal
        toggleModal={categoryModal}
        setToggleModal={setCategoryModal}
      />
    </Fragment>
  );
}

export default EditProdCategory;
