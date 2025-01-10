import SideBarLabel from "@/admin/components/SideBarLabel.tsx";
import { sideBarStyle } from "@/admin/components/styles/SideBar.css.ts";
import RegisterCategoryModal from "@/admin/screen/category/components/register/RegisterCategoryModal.tsx";
import { type Category, fetchCategories } from "@/cmds/categories.ts";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [toggleModal, setToggleModal] = useState<boolean>(false);

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
      <div className={sideBarStyle.sideContainer}>
        <div className={sideBarStyle.home}>
          <Link to="/admin">
            <h3>Home</h3>
          </Link>
        </div>

        <div className={sideBarStyle.contentsContainer}>
          <SideBarLabel
            title={"カタログ"}
            element={
              <Fragment>
                <Link to={"registeredCategory"}>カテゴリー詳細</Link>

                {/* todo: Catalog追加する空の配列がいる */}
                {categories.map((category) => (
                  <Link
                    to="registeredCatalog"
                    key={category.id}
                    state={{ title: category.name }}
                  >
                    {category.name}
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
