import { style } from "@vanilla-extract/css";

export const itemStyle = {
  list: style({
    display: "flex",
    alignItems: "center",
    fontSize: "0.85rem",
    background: "#fff",
    border: "1px solid lightgray",
    ":hover": {
      border: "1px solid rgba(41,255,223,1)",
    },
    "@media": {
      "screen and (max-width: 950px)": {
        fontSize: "0.8rem",
      },
    },
  }),

  imgContainer: style({
    width: "15%",
    padding: "0.5rem 1rem",
  }),

  img: style({
    width: "6rem",
    height: "4rem",
    border: "1px dotted lightgray",
    boxShadow: "1px 1px 2px lightgray",
    "@media": {
      "screen and (max-width: 950px)": {
        width: "4rem",
        height: "2.5rem",
      },
    },
  }),

  name: style({
    width: "25%",
    padding: "1rem",
  }),

  desc: style({
    width: "30%",
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

  category: style({
    width: "15%",
    padding: "1rem",
    fontSize: "0.9rem",
  }),
};
