import SideBarLabel from "@/admin/components/SideBarLabel.tsx";
import { sideBarStyle } from "@/admin/components/styles/SideBar.css.ts";
import RegisterCategoryModal from "@/admin/screen/category/components/register/RegisterCategoryModal.tsx";
import { useCategoryModalStateStore } from "@/admin/store/ModalStateStore.ts";
import { fetchCategories } from "@/cmds/categories.ts";
import { useQuery } from "@tanstack/react-query";
import { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  const { registerModalFlag, editModalFlag, changeRegisterModalFlag } =
    useCategoryModalStateStore();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const configHandler = () => navigate("registeredCategory");

  return (
    <Fragment>
      <div className={sideBarStyle.sideContainer}>
        <div className={sideBarStyle.home}>
          <Link to="/admin">
            <h3>Home</h3>
          </Link>
        </div>

        <div className={sideBarStyle.contentsContainer}>
          <Link to="allItems">商品一覧</Link>

          <SideBarLabel
            title={"カテゴリー"}
            element={
              <Fragment>
                {data?.map((category) => (
                  <Link
                    to="registeredProduct"
                    key={category.id}
                    state={{
                      id: category.id,
                      name: category.name,
                    }}
                  >
                    {category.name}
                  </Link>
                ))}
              </Fragment>
            }
            addHandler={() => {
              changeRegisterModalFlag(true);
            }}
            configHandler={configHandler}
          />
        </div>
      </div>

      <RegisterCategoryModal />
    </Fragment>
  );
}

export default SideBar;
