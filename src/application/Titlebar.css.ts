import { style } from "@vanilla-extract/css";

const HEIGHT = "30px";

export const titleBarStyle = {
  container: style({
    height: HEIGHT,
    display: "flex",
    top: 0,
    left: 0,
    boxSizing: "border-box",
    backgroundColor: "rgba(41,255,223,1)",
    justifyContent: "space-between",
    alignItems: "center",
  }),

  title: style({
    height: HEIGHT,
    color: "black",
    display: "flex",
    paddingLeft: "10px",
    alignItems: "center",
  }),

  commonToolBox: {
    container: style({
      display: "flex",
    }),

    button: style({
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      width: "45px",
      height: "30px",
      backgroundColor: "transparent",
      border: "none",
      selectors: {
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.35)",
        },
        "#alert > &:hover": {
          backgroundColor: "rgb(255,61,61)",
        },
      },
    }),
  },
};
