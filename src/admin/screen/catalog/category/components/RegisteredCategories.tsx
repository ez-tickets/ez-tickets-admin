import RegisteredCategory from "@/admin/screen/catalog/category/components/RegisteredCategory.tsx";
import { type Category, fetchCategories } from "@/cmds/categories.ts";
import { Fragment, useEffect, useState } from "react";

type RegisteredCategoriesProps = {
  setEditModal: (flag: boolean) => void;
  toggleModal: boolean;
};

function RegisteredCategories({
  setEditModal,
  toggleModal,
}: RegisteredCategoriesProps) {
  const [categories, setCategories] = useState<Category[] | null>(null);
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    (async () => {
      const categories = await fetchCategories();
      categories.sort((a, b) => a.order - b.order);
      setCategories(categories);
    })();
  }, [toggleModal]);

  return (
    <Fragment>
      {categories?.map((category) => (
        <RegisteredCategory
          key={category.id}
          id={category.id}
          category={category.name}
          setEditModal={setEditModal}
        />
      ))}
    </Fragment>
  );
}

export default RegisteredCategories;
