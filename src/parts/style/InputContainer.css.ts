import { style } from "@vanilla-extract/css";

export const inputContainerStyle = {
  inputContainer: style({
    display: "flex",
    borderBottom: "1px solid lightgray",
  }),

  title: style({
    width: "40%",
    padding: "4rem 0",
    textAlign: "center",
  }),
};
