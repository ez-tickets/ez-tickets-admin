import { style } from "@vanilla-extract/css";

export const registeredProductStyle = {
  name: style({
    width: "40%",
    padding: "1rem",
    fontSize: "0.85rem",
  }),

  price: style({
    width: "20%",
    padding: "1rem",
    fontSize: "0.85rem",
  }),

  path: style({
    width: "40%",
    padding: "1rem",
    fontSize: "0.85rem",
  }),

  img: style({
    width: "9rem",
    height: "7rem",
    border: "1px dotted lightgray",
    boxShadow: "1px 2px 3px lightgray",
  }),
};
