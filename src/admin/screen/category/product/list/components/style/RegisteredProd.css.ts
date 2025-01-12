import { style } from "@vanilla-extract/css";

export const registeredProdStyle = {
  list: style({
    display: "flex",
    alignItems: "center",
    fontSize: "0.85rem",
    background: "#fff",
    border: "1px solid lightgray",
    ":hover": {
      border: "1px solid rgba(41,255,223,1)",
    },
  }),

  imgContainer: style({
    width: "20%",
    padding: "0.5rem 1rem",
  }),

  img: style({
    width: "6rem",
    height: "4rem",
    border: "1px dotted lightgray",
    boxShadow: "1px 1px 2px lightgray",
  }),

  name: style({
    width: "25%",
    padding: "1rem",
  }),

  desc: style({
    width: "35%",
    padding: "1rem",
    textOverflow: "ellipsis",
    overflow: "hidden",
  }),

  price: style({
    width: "15%",
    padding: "1rem",
    ":after": {
      content: " '円'",
    },
  }),

  congruent: style({
    cursor: "grab",
    padding: "1rem",
  }),
};
