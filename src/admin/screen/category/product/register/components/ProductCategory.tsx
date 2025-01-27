import RegisterCategoryModal from "@/admin/screen/category/components/register/RegisterCategoryModal.tsx";
import { productCategoryStyle } from "@/admin/screen/category/product/register/components/style/ProductCategory.css.ts";
import SelectModal from "@/admin/screen/modal/selectModal/SelectModal.tsx";
import { fetchCategories } from "@/cmds/categories.ts";
import InputContainer from "@/parts/InputContainer.tsx";
import { IconX } from "@tabler/icons-react";
import { Fragment, useState } from "react";
import {useQuery} from "@tanstack/react-query";

type ProductCategoryProps = {
  category: string | null;
  setCategory: (category: string) => void;
};

function ProductCategory({ category, setCategory }: ProductCategoryProps) {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [categoryModal, setCategoryModal] = useState<boolean>(false);

  const { isLoading, error, data: categories } =  useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const registerHandler = (name: string) => {
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
                  カテゴリー変更
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
                  onClick={() => registerHandler(category.name)}
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

export default ProductCategory;
