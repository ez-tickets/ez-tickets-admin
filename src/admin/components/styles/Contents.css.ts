import { style } from "@vanilla-extract/css";

export const contentsStyle = {
  mainContainer: style({
    width: "80%",
    height: "100vh",
    overflowY: "scroll",
    boxSizing: "border-box",
    "::-webkit-scrollbar": {
      width: "4px",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "#c3c5c5",
      borderRadius: "5px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(35,215,189, 0.8)",
      borderRadius: "5px",
      border: "0.5px solid #35af98",
    },
  }),
};
