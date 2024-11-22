import { style } from "@vanilla-extract/css";

export const editModalStyle = {
  overlay: style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    overflow: "scroll",
    backgroundColor: "#ffffff",
    boxShadow: "1px 2px 3px gray",
  }),

  title: style({
    textIndent: "2rem",
  }),

  editScreen: style({
    padding: "10px 0",
  }),

  inputContainer: style({
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "30px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
  }),

  inputTitle: style({
    width: "30%",
    textIndent: "2rem",
  }),

  inputOptionTitle: style({
    width: "30%",
    textIndent: "2rem",
    color: "rgb(35,206,180)",
    textShadow: "1px 2px 3px rgba(0,0,0,0.1)",
  }),

  inputValue: style({
    width: "70%",
  }),

  input: style({
    width: "100%",
    border: "1px solid rgba(0,0,0,0.3)",
    borderRadius: "3px",
    boxShadow: "2px 2px 3px rgba(0,0,0,0.2)",
    padding: "5px 20px",
  }),

  optionDeleteIcon: style({
    position: "absolute",
    left: "28%",
  }),

  closeIcon: style({
    position: "absolute",
    top: 10,
    right: 10,
  }),
};
