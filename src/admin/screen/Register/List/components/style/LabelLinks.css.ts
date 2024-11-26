import { style } from "@vanilla-extract/css";

export const labelLinksStyle = {
  labelContainer: style({
    width: "80%",
    marginLeft: "1rem",
    padding: "0.65rem 1rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    "::-webkit-scrollbar": {
      height: "2px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(35,215,189, 0.8)",
      borderRadius: "5px",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "#232E33",
      borderRadius: "5px",
    },
    ":hover": {
      overflow: "auto hidden",
    },
  }),

  link: style({
    marginRight: "0.2rem",
    padding: "0.5rem 2rem",
    border: "1px solid lightgray",
    borderRadius: "5px",
    ":hover": {
      backgroundColor: "gold",
    },
  }),
};
