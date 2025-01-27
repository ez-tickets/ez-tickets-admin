import SideBarLabel from "@/admin/components/SideBarLabel.tsx";
import { sideBarStyle } from "@/admin/components/styles/SideBar.css.ts";
import RegisterCategoryModal from "@/admin/screen/category/components/register/RegisterCategoryModal.tsx";
import { type Category, fetchCategories } from "@/cmds/categories.ts";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

function SideBar() {
  // const [categories, setCategories] = useState<Category[]>([]);
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const { isLoading, error, data } =  useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  // useEffect(() => {
  //   (async () => {
  //     const categories = await fetchCategories();
  //     categories.sort((a, b) => a.order - b.order);
  //     setCategories(categories);
  //   })();
  // }, [categories]);

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
            addHandler={() => setToggleModal(true)}
            configHandler={configHandler}
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
