import { style } from "@vanilla-extract/css";

export const editModalStyle = {
  overlay: style({
    position: "absolute",
    top: 0,
    width: "100%",
    overflow: "scroll",
    backgroundColor: "#ffffff",
    boxShadow: "1px 2px 3px gray",
  }),

  header: style({
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),

  title: style({
    textIndent: "2rem",
  }),

  headerButtonArea: style({
    marginRight: "60px",
  }),

  editScreen: style({
    padding: "10px 0 20px",
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
    ":hover": {
      cursor: "pointer",
    },
  }),

  closeIcon: style({
    position: "absolute",
    top: 10,
    right: 10,
  }),

  resetButton: style({
    margin: "5px 10px",
    padding: "10px 40px",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "5px",
    boxShadow: "2px 2px 3px rgba(0,0,0,0.1)",
    ":hover": {
      cursor: "pointer",
      backgroundColor: "gold",
    },
  }),

  addButton: style({
    padding: "5px 10px",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "5px",
    boxShadow: "1px 2px 3px rgba(0,0,0,0.4)",
    ":hover": {
      backgroundColor: "gold",
      border: "1px solid rgba(0,0,0,0.5)",
    },
  }),
};
