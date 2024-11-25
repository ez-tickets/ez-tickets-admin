import RegisteredCategory from "@/admin/screen/Register/List/components/RegisteredCategory.tsx";
import { useCategoryRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { Fragment } from "react";

function RegisteredCategories() {
  const { categoryRegisterQuery } = useCategoryRegistrationStore();

  return (
    <Fragment>
      {categoryRegisterQuery.map((category) => (
        <RegisteredCategory key={category.id} category={category.category} />
      ))}
    </Fragment>
  );
}

export default RegisteredCategories;
