import { style } from "@vanilla-extract/css";

export const prodActiveButtonStyle = {
  buttonContainer: style({
    display: "flex",
    justifyContent: "center",
  }),

  registerButton: style({
    margin: "7rem 1rem",
    padding: "10px 20px",
    display: "block",
    border: "1px solid rgba(0,0,0,0.4)",
    borderRadius: "5px",
    boxShadow: "1px 2px 3px rgba(0,0,0,0.4)",
    ":hover": {
      backgroundColor: "gold",
    },
  }),

  resetButton: style({
    margin: "7rem 1rem",
    padding: "10px 20px",
    display: "block",
    border: "1px solid rgba(0,0,0,0.4)",
    borderRadius: "5px",
    boxShadow: "1px 2px 3px rgba(0,0,0,0.4)",
    ":hover": {
      backgroundColor: "rgba(79,255,165,0.84)",
    },
  }),
};
