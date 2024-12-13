import { style } from "@vanilla-extract/css";

export const catalogMainStyle = {
  container: style({
    display: "flex",
    alignItems: "center",
  }),

  selectContainer: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 0",
  }),

  require: style({
    color: "red"
  }),

  selectButton: style({
    padding: "10px 20px",
    border: "1px solid lightgray",
    borderRadius: "5px",
    boxShadow: "1px 2px 3px lightgray",
  }),

  selectedMain: style({
    marginLeft: "10.5rem",
  }),

  item: style({
    position: "relative",
    padding: "10px",
    borderTop: "1px dotted lightgray",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#efefef",
    },
  }),
};
