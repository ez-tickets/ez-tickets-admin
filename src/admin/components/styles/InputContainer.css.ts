import { style } from "@vanilla-extract/css";

export const inputContainerStyle = {
  inputContainer: style({
    display: "flex",
    borderBottom: "1px solid lightgray",
  }),

  title: style({
    width: "40%",
    padding: "5rem 10rem",
    textAlign: "center",
  }),
};
