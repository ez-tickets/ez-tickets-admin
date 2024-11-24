import { style } from "@vanilla-extract/css";

export const productStyle = {
  prodDetails: style({
    width: "100%",
    marginTop: "2px",
    padding: "15px 0",
    display: "flex",
    backgroundColor: "white",
    boxShadow: "1px 1px 5px rgba(0,0,0,0.2)",
  }),

  prodName: style({
    width: "35%",
    margin: "0 20px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    ":hover": {
      color: "rgb(35,206,180)",
      cursor: "pointer",
    },
  }),

  prodPrice: style({
    width: "15%",
    margin: "0 20px",
    ":before": {
      content: "¥",
    },
  }),

  prodQuantity: style({
    width: "15%",
    margin: "0 20px",
  }),

  prodOption: style({
    width: "35%",
    margin: "0 20px",
  }),
};
