import { style } from "@vanilla-extract/css";

export const registeredCatalogListStyle = {
  img: style({
    width: "15%",
    padding: "1rem",
    borderRight: "1px solid lightgray",
    fontSize: "0.9rem",
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
