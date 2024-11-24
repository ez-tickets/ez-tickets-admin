import { style } from "@vanilla-extract/css";

export const productRegisterStyle = {
  productRegisterContainer: style({
    height: "100vh",
    backgroundColor: "#fff",
  }),

  header: style({
    position: "sticky",
    top: 0,
    left: 0,
    width: "100%",
    padding: "0.37rem 1rem",
    borderBottom: "1px solid lightgray",
    boxShadow: "0px 1px 6px rgba(0,0,0,0.5)",
  }),

  inputContainer: style({
    display: "flex",
    borderBottom: "1px solid lightgray",
  }),

  title: style({
    width: "40%",
    padding: "6rem 10rem",
    textAlign: "center",
  }),

  input: style({
    width: "60%",
    padding: "5rem 0rem",
  }),

  value: style({
    width: "80%",
    padding: "1rem",
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,0.3)",
    borderRadius: "2px",
    boxShadow: "0px 1px 6px rgba(0,0,0,0.5)",
  }),

  button: style({
    margin: "10rem auto",
    padding: "10px 20px",
    display: "block",
    border: "1px solid rgba(0,0,0,0.4)",
    borderRadius: "5px",
    boxShadow: "1px 2px 3px rgba(0,0,0,0.4)",
    ":hover": {
      backgroundColor: "gold",
    },
  }),
};
