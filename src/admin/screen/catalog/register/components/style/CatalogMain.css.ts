import { style } from "@vanilla-extract/css";

export const catalogMainStyle = {
  container: style({
    padding: "5px",
  }),

  item: style({
    position: "relative",
    width: "100%",
    padding: "10px",
    borderTop: "1px dotted lightgray",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#efefef",
    },
  }),

  itemName: style({
    width: "60%",
    padding: " 5px",
  }),

  addContent: style({
    padding: "5px 0",
  }),

  attention: style({
    marginLeft: "0.3rem",
    color: "red",
    fontSize: "14px",
  }),

  text: style({
    width: "35%",
    marginLeft: "1rem",
    padding: "0 5px",
    border: "1px solid gray",
    borderRadius: "2px",
  }),

  button: style({
    width: "20%",
    marginLeft: "10px",
    border: "1px solid lightgray",
    borderRadius: "5px",
    ":hover": {
      backgroundColor: "gold",
    },
  }),

  cancelButton: style({
    position: "absolute",
    top: "50%",
    right: "1rem",
    transform: "translate(0, -50%)",
    marginLeft: "3rem",
    padding: "2.5px 10px",
    border: "1px solid lightgray",
    borderRadius: "5px",
    ":hover": {
      backgroundColor: "#ff8383",
    },
  }),
};
