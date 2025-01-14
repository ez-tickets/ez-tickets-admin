import { globalStyle, style } from "@vanilla-extract/css";

export const checkBoxStyle = {
  container: style({
    position: "relative",
    width: "60%",
    padding: "1.75rem 0rem",
  }),

  checkBox: style({
    margin: "1rem 0 0 0.5rem",
    display: "flex",
    alignItems: "center",
  }),

  sell: style({
    stroke: "#00ff7f",
    strokeWidth: 2,
    cursor: "pointer",
  }),

  notSell: style({
    stroke: "lightgray",
    strokeWidth: 2,
    cursor: "pointer",
  }),

  textSell: style({
    marginLeft: "1.5rem",
    color: "#0ec268",
    cursor: "pointer",
  }),

  textNotSell: style({
    marginLeft: "1.5rem",
    color: "#fc2727",
    cursor: "pointer",
  }),
};

globalStyle(`${checkBoxStyle.container} p`, {
  color: "gray",
  marginLeft: "0.5rem",
});
