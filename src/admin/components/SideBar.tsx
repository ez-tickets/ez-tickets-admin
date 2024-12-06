import SideBarLabel from "@/admin/components/SideBarLabel.tsx";
import { sideBarStyle } from "@/admin/components/styles/SideBar.css.ts";
import RegisterCategoryModal from "@/admin/screen/catalog/category/components/RegisterCategoryModal.tsx";
import { useCategoryRegistrationStore } from "@/admin/store/RegistrationStore.ts";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
  const { categoryRegisterQuery } = useCategoryRegistrationStore();
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  return (
    <Fragment>
      <div className={sideBarStyle.sideContainer}>
        <div className={sideBarStyle.home}>
          <Link to="/admin">
            <h3>Home</h3>
          </Link>
        </div>

        <div className={sideBarStyle.contentsContainer}>
          <SideBarLabel
            title={"商品管理"}
            element={<Link to={"registeredProd"}>商品詳細</Link>}
          />

          <SideBarLabel
            title={"カタログ"}
            element={
              <Fragment>
                <Link to={"registeredCategory"}>カテゴリー詳細</Link>

                {categoryRegisterQuery.map((category) => (
                  <Link
                    to="registeredCatalog"
                    key={category.id}
                    state={{ title: category.category }}
                  >
                    {category.category}
                  </Link>
                ))}
              </Fragment>
            }
            addButton={true}
            executeHandler={() => setToggleModal(true)}
          />
        </div>
      </div>

      <RegisterCategoryModal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      />
    </Fragment>
  );
}

export default SideBar;
