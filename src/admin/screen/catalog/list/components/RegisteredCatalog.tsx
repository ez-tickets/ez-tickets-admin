import { registeredCatalogStyle } from "@/admin/screen/catalog/list/components/style/RegisteredCatalog.css.ts";
import ListItem from "@/parts/ListItem.tsx";
import type { RegisterItem } from "@/types.ts";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Fragment } from "react";

type RegisteredCatalogProps = {
  name: string;
  desc: string;
  price: number;
  img: string;
  main: RegisterItem;
};

function RegisteredCatalog({
  name,
  desc,
  price,
  img,
  main,
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
            <div className={registeredCatalogStyle.name}>{name}</div>
            <div className={registeredCatalogStyle.main}>{main.name}</div>
            <div className={registeredCatalogStyle.desc}>{desc}</div>
            <div className={registeredCatalogStyle.price}>
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
