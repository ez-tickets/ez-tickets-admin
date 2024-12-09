import { registeredCatalogStyle } from "@/admin/screen/catalog/list/components/style/RegisteredCatalog.css.ts";
import { registeredCatalogListStyle } from "@/admin/screen/catalog/list/components/style/RegisteredCatalogList.css.ts";
import ListItem from "@/parts/ListItem.tsx";
import type { RegisterProd } from "@/types.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment } from "react";

type RegisteredCatalogProps = {
  name: string;
  desc: string;
  price: number;
  img: string;
  main: RegisterProd[];
  sub: RegisterProd[];
  options: RegisterProd[];
};

function RegisteredCatalog({
  name,
  desc,
  price,
  img,
  main,
  sub,
  options,
}: RegisteredCatalogProps) {
  return (
    <Fragment>
      <ListItem
        block={
          <Fragment>
            <div className={registeredCatalogStyle.imgContainer}>
              {img !== "" ? (
                <img
                  src={convertFileSrc(img)}
                  alt={img}
                  className={registeredCatalogStyle.img}
                />
              ) : (
                <div className={registeredCatalogStyle.img} />
              )}
            </div>
            <div className={registeredCatalogListStyle.name}>{name}</div>
            <div className={registeredCatalogListStyle.main}>
              {main.map((item) => (
                <span key={item.id}>{item.name}</span>
              ))}
            </div>
            <div className={registeredCatalogListStyle.sub}>{sub.length}件</div>
            <div className={registeredCatalogListStyle.option}>
              {options.length}件
            </div>
            <div className={registeredCatalogListStyle.desc}>{desc}</div>
            <div className={registeredCatalogListStyle.price}>
              {price.toLocaleString()}
            </div>
          </Fragment>
        }
        executeHandler={() => {}}
      />
    </Fragment>
  );
}

export default RegisteredCatalog;
