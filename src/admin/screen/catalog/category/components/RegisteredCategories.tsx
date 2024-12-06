import RegisteredCategory from "@/admin/screen/catalog/category/components/RegisteredCategory.tsx";
import { useCategoryRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { Fragment } from "react";

type RegisteredCategoriesProps = {
  setEditModal: (flag: boolean) => void;
};

function RegisteredCategories({ setEditModal }: RegisteredCategoriesProps) {
  const { categoryRegisterQuery } = useCategoryRegistrationStore();

  return (
    <Fragment>
      {categoryRegisterQuery.map((category) => (
        <RegisteredCategory
          key={category.id}
          id={category.id}
          category={category.category}
          setEditModal={setEditModal}
        />
      ))}
    </Fragment>
  );
}

export default RegisteredCategories;
