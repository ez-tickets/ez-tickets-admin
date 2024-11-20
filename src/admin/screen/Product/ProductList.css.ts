import { style } from "@vanilla-extract/css";

export const productListStyle = {
  homeContainer: style({
    position: "relative",
    width: "100%",
    margin: "auto",
  }),

  prodListContainer: style({
    width: "98%",
    margin: "20px auto 50px",
    backgroundColor: "white",
  }),

  title: style({
    textIndent: "1rem",
    backgroundColor: "#F8F8FF",
  }),

  listHeader: style({
    width: "100%",
    marginBottom: "5px",
    padding: "18px 0",
    backgroundColor: "#d0d0d0",
    display: "flex",
    boxShadow: "1px 2px 4px rgba(0,0,0,0.2)",
  }),

  prodHead: style({
    width: "35%",
    margin: "0 20px",
  }),

  priceHead: style({
    width: "15%",
    margin: "0 20px",
  }),

  quantityHead: style({
    width: "15%",
    margin: "0 20px",
  }),

  optionHead: style({
    width: "35%",
    margin: "0 20px",
  }),

  prodDetails: style({
    width: "100%",
    marginTop: "2px",
    padding: "15px 0",
    display: "flex",
    boxShadow: "1px 1px 5px rgba(0,0,0,0.2)",
  }),

  prodName: style({
    width: "35%",
    display: "flex",
    alignItems: "center",
    margin: "0 20px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  }),

  prodPrice: style({
    width: "15%",
    margin: "0 20px",
    display: "flex",
    alignItems: "center",
    ":before": {
      content: "¥",
    },
  }),

  prodQuantity: style({
    width: "15%",
    margin: "0 20px",
    display: "flex",
    alignItems: "center",
  }),

  prodOption: style({
    width: "35%",
    margin: "0 20px",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    "::-webkit-scrollbar": {
      height: "2px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "skyblue",
      borderRadius: "5px",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "#c9c9c9",
      borderRadius: "5px",
    },
    ":hover": {
      overflow: "auto hidden",
    },
  }),

  option: style({
    margin: "0 10px",
  }),

  optionPrice: style({
    ":before": {
      content: " ( ¥",
    },
    ":after": {
      content: " ) ",
    },
  }),
};
