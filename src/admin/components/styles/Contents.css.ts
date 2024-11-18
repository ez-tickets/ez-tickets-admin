import { style } from "@vanilla-extract/css";

export const contentsStyle = {
  mainContainer: style({
    width: "80%",
    height: "100vh",
    overflowY: "scroll",
    boxSizing: "border-box",
  }),

  wrapper: style({
    position: "relative",
    width: "100%",
  }),
};
