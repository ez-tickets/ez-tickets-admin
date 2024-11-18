import { homeStyle } from "@/admin/screen/Home/Home.css.ts";
import { allRegisterCategory, registeredProducts } from "@/mockData.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <div className={homeStyle.homeContainer}>
        <div className={homeStyle.headerContainer}>
          <ul className={homeStyle.header}>
            {allRegisterCategory.map((list) => (
              <li className={homeStyle.headerLi} key={list.id}>
                <Link to={"#"}>{list.categoryName}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={homeStyle.prodListContainer}>
          <h1 className={homeStyle.title}>登録商品</h1>
          <div className={homeStyle.listHeader}>
            <div className={homeStyle.prodHead}>商品名</div>
            <div className={homeStyle.priceHead}>価格</div>
            <div className={homeStyle.quantityHead}>在庫数</div>
            <div className={homeStyle.optionHead}>オプション</div>
          </div>

          {registeredProducts.map((product) => (
            <div className={homeStyle.prodDetails} key={product.id}>
              <div className={homeStyle.prodName}>{product.prod.name}</div>
              <div className={homeStyle.prodPrice}>
                {product.prod.price.toLocaleString()}
              </div>
              <div className={homeStyle.prodQuantity}>
                {product.prod.quantity.toLocaleString()}
              </div>
              <div className={homeStyle.prodOption}>
                {product.options.map((option) => (
                  <p className={homeStyle.option} key={option.id}>
                    {option.name}
                    <span className={homeStyle.optionPrice}>
                      {option.price.toLocaleString()}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
