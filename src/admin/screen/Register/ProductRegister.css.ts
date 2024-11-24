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
    backgroundColor: "#fff",
    borderBottom: "1px solid lightgray",
    boxShadow: "0px 1px 6px rgba(0,0,0,0.5)",
    zIndex: 100,
  }),

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

  inputImg: style({
    position: "relative",
    width: "60%",
    display: "flex",
    alignItems: "center",
  }),

  imgChooseButton: style({
    padding: "5px",
    border: "1px solid lightgray",
    borderRadius: "5px",
    boxShadow: "1px 2px 3px lightgray",
  }),

  imgText: style({
    textAlign: "center",
  }),

  img: style({
    width: "9rem",
    height: "6rem",
    margin: "0 12rem",
    border: "1px dotted lightgray",
    boxShadow: "1px 2px 3px lightgray",
  }),
};
