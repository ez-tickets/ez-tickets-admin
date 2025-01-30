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
    "@media": {
      "screen and (max-width: 950px)": {
        fontSize: "0.75rem",
      },
    },
  }),

  congruent: style({
    width: "3%",
    cursor: "grab",
    padding: "1rem",
    "@media": {
      "screen and (max-width: 950px)": {
        padding: "0.5rem",
      },
    },
  }),

  notCongruent: style({
    width: "3%",
    padding: "1rem",
    "@media": {
      "screen and (max-width: 950px)": {
        padding: "0.5rem",
      },
    },
  }),

  imgContainer: style({
    width: "37%",
    padding: "0.5rem 1rem",
    // backgroundColor: "yellow"
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
    // backgroundColor: "green"
  }),

  desc: style({
    width: "30%",
    padding: "1rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    // backgroundColor: "blue"
  }),

  price: style({
    width: "30%",
    padding: "1rem",
    // backgroundColor: "red",
    ":before": {
      content: "¥",
    },
  }),

  saleState: style({
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "purple"
  }),

  textSell: style({
    color: "#0ec268",
  }),

  textNotSell: style({
    color: "#fc2727",
  }),

  checkBox: style({
    width: "1rem",
    height: "1rem",
    marginRight: "10px",
    accentColor: "#0ec268",
  }),
};
