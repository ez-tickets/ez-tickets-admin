import { style } from "@vanilla-extract/css";

export const registeredCatalogListStyle = {
  img: style({
    width: "15%",
    padding: "1rem",
    borderRight: "1px solid lightgray",
    fontSize: "0.9rem",

    // width: "9rem",
    // height: "7rem",
    // margin: "0 10rem",
    // border: "1px dotted lightgray",
    // boxShadow: "1px 2px 3px lightgray",
  }),

  name: style({
    width: "20%",
    padding: "1rem",
    borderRight: "1px solid lightgray",
    fontSize: "0.9rem",
  }),

  main: style({
    width: "20%",
    padding: "1rem",
    borderRight: "1px solid lightgray",
    fontSize: "0.9rem",
  }),

  sub: style({
    width: "10%",
    padding: "1rem",
    borderRight: "1px solid lightgray",
    fontSize: "0.9rem",
  }),

  option: style({
    width: "10%",
    padding: "1rem",
    borderRight: "1px solid lightgray",
    fontSize: "0.9rem",
  }),

  desc: style({
    width: "15%",
    padding: "1rem",
    borderRight: "1px solid lightgray",
    fontSize: "0.9rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  }),

  price: style({
    width: "10%",
    padding: "1rem",
    borderRight: "1px solid lightgray",
    fontSize: "0.9rem",
  }),
};
