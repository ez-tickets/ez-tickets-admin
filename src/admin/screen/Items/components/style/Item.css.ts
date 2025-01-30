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
    width: "40%",
    padding: "0.5rem 1rem",
  }),

  img: style({
    width: "80px",
    height: "60px",
    aspectRatio: "4/3",
    border: "1px dotted lightgray",
    boxShadow: "1px 1px 2px lightgray",
  }),

  name: style({
    width: "30%",
    padding: "1rem",
  }),

  desc: style({
    width: "45%",
    padding: "1rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  }),

  price: style({
    width: "30%",
    padding: "1rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    ":before": {
      content: "¥",
    },
  }),
};
