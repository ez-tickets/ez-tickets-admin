import { style } from "@vanilla-extract/css";

export const viewStyle = {
  viewContainer: style({
    display: "flex",
  }),

  sideContainer: style({
    width: "20%",
    height: "100vh",
    backgroundColor: "#013548",
  }),

  mainContainer: style({
    width: "80%",
    height: "100vh",
    backgroundColor: "#ffffff",
  }),
};
