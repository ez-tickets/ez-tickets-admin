import { homeStyle } from "@/admin/screen/Home/Home.css.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <div className={homeStyle.homeContainer}>
        <div className={homeStyle.headerContainer}>
          <ul className={homeStyle.header}>
            <li className={homeStyle.headerLi}>
              <Link to={"#"}>登録商品</Link>
            </li>
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

          <div className={homeStyle.prodDetails}>
            <div className={homeStyle.prodName}>秋刀魚の塩焼き定食</div>
            <div className={homeStyle.prodPrice}>1,200</div>
            <div className={homeStyle.prodQuantity}>0</div>
            <div className={homeStyle.prodOption}>{}</div>
          </div>

          <div className={homeStyle.prodDetails}>
            <div className={homeStyle.prodName}>醤油ラーメン</div>
            <div className={homeStyle.prodPrice}>950</div>
            <div className={homeStyle.prodQuantity}>10</div>
            <div className={homeStyle.prodOption}>
              <p className={homeStyle.option}>
                チャーシュー<span className={homeStyle.optionPrice}>200</span>
              </p>
              <p className={homeStyle.option}>
                メンマ<span className={homeStyle.optionPrice}>50</span>
              </p>
              <p className={homeStyle.option}>
                もやし<span className={homeStyle.optionPrice}>30</span>
              </p>
              <p className={homeStyle.option}>
                煮卵<span className={homeStyle.optionPrice}>100</span>
              </p>
              <p className={homeStyle.option}>
                ねぎ<span className={homeStyle.optionPrice}>50</span>
              </p>
              <p className={homeStyle.option}>
                のり<span className={homeStyle.optionPrice}>50</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
