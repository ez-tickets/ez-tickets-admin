import { style } from "@vanilla-extract/css";

export const productCategoryStyle = {
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

  modalContainer: style({
    width: "100%",
    height: "100%",
    paddingBottom: "1.8rem",
    overflow: "scroll",
    boxSizing: "border-box",
    "::-webkit-scrollbar": {
      width: "4px",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "#c3c5c5",
      borderRadius: "5px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(35,215,189, 0.8)",
      borderRadius: "5px",
      border: "0.5px solid #35af98",
    },
  }),

  selectButton: style({
    padding: "10px 15px",
    fontSize: "0.9rem",
    border: "1px solid lightgray",
    borderRadius: "5px",
    boxShadow: "1px 2px 3px lightgray",
  }),

  selectedCategory: style({
    marginLeft: "5rem",
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

  add: style({
    position: "relative",
    padding: "10px",
    marginBottom: "2px",
    textAlign: "center",
    borderTop: "1px dotted lightgray",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "gold",
    },
  }),
};
