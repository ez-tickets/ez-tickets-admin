import { style } from "@vanilla-extract/css";

export const editNameStyle = {
  inputContainer: style({
    display: "flex",
    borderBottom: "1px solid lightgray",
  }),

  title: style({
    width: "40%",
    padding: "5rem 10rem",
    textAlign: "center",
  }),

  input: style({
    position: "relative",
    width: "60%",
    padding: "4rem 0rem",
  }),

  value: style({
    width: "80%",
    padding: "1rem",
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,0.3)",
    borderRadius: "2px",
    boxShadow: "0px 1px 6px rgba(0,0,0,0.5)",
  }),
};
