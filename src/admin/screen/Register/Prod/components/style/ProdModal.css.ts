import { style } from "@vanilla-extract/css";

export const prodModalStyle = {
  text: style({
    margin: "3.5rem 0",
    fontSize: "1.25rem",
    textAlign: "center",
  }),

  buttonContainer: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),

  buttonYes: style({
    width: "12rem",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "5px",
    boxShadow: "2px 2px 8px lightgray",
    ":hover": {
      backgroundColor: "gold",
    },
  }),

  buttonNo: style({
    width: "12rem",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "5px",
    boxShadow: "2px 2px 8px lightgray",
    ":hover": {
      backgroundColor: "lightgray",
    },
  }),
};
