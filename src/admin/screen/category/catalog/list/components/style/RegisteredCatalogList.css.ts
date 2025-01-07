import { style } from "@vanilla-extract/css";

export const registeredCatalogListStyle = {
  img: style({
    width: "20%",
    padding: "1rem",
    fontSize: "0.9rem",
  }),

  name: style({
    width: "30%",
    padding: "1rem",
    fontSize: "0.9rem",
  }),

  main: style({
    width: "20%",
    padding: "1rem",
    fontSize: "0.9rem",
  }),

  desc: style({
    width: "20%",
    padding: "1rem",
    fontSize: "0.9rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  }),

  price: style({
    width: "10%",
    padding: "1rem",
    fontSize: "0.9rem",
  }),
};
