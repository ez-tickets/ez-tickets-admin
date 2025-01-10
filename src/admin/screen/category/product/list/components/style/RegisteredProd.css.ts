import { style } from "@vanilla-extract/css";

export const registeredProdStyle = {
  imgContainer: style({
    width: "20%",
    padding: "0.2rem 0.5rem",
    fontSize: "0.85rem",
  }),

  img: style({
    width: "9rem",
    height: "7rem",
    border: "1px dotted lightgray",
    boxShadow: "1px 1px 2px lightgray",
  }),

  name: style({
    width: "30%",
    padding: "1rem",
    fontSize: "1rem",
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
