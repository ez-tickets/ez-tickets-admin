import { catalogCategoryStyle } from "@/admin/screen/category/catalog/register/components/style/CatalogCategory.css.ts";
import RegisterCategoryModal from "@/admin/screen/category/components/RegisterCategoryModal.tsx";
import SelectModal from "@/admin/screen/modal/selectModal/SelectModal.tsx";
import { type Category, fetchCategories } from "@/cmds/categories.ts";
import InputContainer from "@/parts/InputContainer.tsx";
import { Fragment, useEffect, useState } from "react";

type CatalogCategoryProps = {
  category: string;
  setCategory: (category: string) => void;
};

function CatalogCategory({ category, setCategory }: CatalogCategoryProps) {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [categoryModal, setCategoryModal] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    (async () => {
      const categories = await fetchCategories();
      categories.sort((a, b) => a.order - b.order);
      setCategories(categories);
    })();
  }, [categories]);

  const registerHandler = (id: string) => {
    const selectedCategory = categories.find((category) => category.id === id);
    if (selectedCategory) {
      setCategory(selectedCategory.name);
    }
    setToggleModal(false);
  };

  return (
    <Fragment>
      <InputContainer
        title={"カテゴリー"}
        inputElement={
          <Fragment>
            <div className={catalogCategoryStyle.container}>
              <div className={catalogCategoryStyle.selectContainer}>
                <p className={catalogCategoryStyle.require}>（必須）</p>
                <button
                  type={"button"}
                  className={catalogCategoryStyle.selectButton}
                  onClick={() => setToggleModal(true)}
                >
                  カテゴリー選択
                </button>
              </div>
              <div className={catalogCategoryStyle.selectedMain}>
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
          <div className={catalogCategoryStyle.modalContainer}>
            {categories.map((category) => {
              return (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <div
                  key={category.id}
                  className={catalogCategoryStyle.item}
                  onClick={() => registerHandler(category.id)}
                >
                  {category.name}
                </div>
              );
            })}
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              className={catalogCategoryStyle.add}
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

export default CatalogCategory;
