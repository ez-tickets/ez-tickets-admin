import { style } from "@vanilla-extract/css";

const HEIGHT = "30px";

export const titleBarStyle = {
  container: style({
    height: HEIGHT,
    display: "flex",
    top: 0,
    left: 0,
    boxSizing: "border-box",
    backgroundColor: "#0055CC",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  title: style({
    height: HEIGHT,
    color: "white",
    display: "flex",
    paddingLeft: "10px",
    alignItems: "center",
  }),
};
