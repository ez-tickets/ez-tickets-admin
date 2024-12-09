import { style } from "@vanilla-extract/css";

export const registerCtlgModalStyle = {
  buttonContainer: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "100px",
  }),

  button: style({
    marginRight: "10px",
    padding: "5px 10px",
    border: "1px solid lightgray",
    borderRadius: "5px",
    ":hover": {
      backgroundColor: "gold",
    },
  }),
};
