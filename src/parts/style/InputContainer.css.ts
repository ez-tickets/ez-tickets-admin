import { style } from "@vanilla-extract/css";

export const inputContainerStyle = {
  inputContainer: style({
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid lightgray",
  }),

  title: style({
    width: "40%",
    margin: "auto 0",
    textAlign: "center",
  }),
};
