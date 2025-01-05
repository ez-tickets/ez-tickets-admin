import RegisteredCategory from "@/admin/screen/catalog/category/components/RegisteredCategory.tsx";
import { type Category, fetchCategories } from "@/cmds/categories.ts";
import { Fragment, useEffect, useState } from "react";

type RegisteredCategoriesProps = {
  setEditModal: (flag: boolean) => void;
};

function RegisteredCategories({ setEditModal }: RegisteredCategoriesProps) {
  const [categories, setCategories] = useState<Category[] | null>(null);
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
      {categories?.map((category) => (
        <RegisteredCategory
          key={category.id}
          id={category.id}
          name={category.name}
          setEditModal={setEditModal}
        />
      ))}
    </Fragment>
  );
}

export default RegisteredCategories;
