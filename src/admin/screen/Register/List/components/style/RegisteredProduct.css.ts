import { style } from "@vanilla-extract/css";

export const registeredProductStyle = {
  prodItem: style({
    marginTop: "1px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid lightgray",
  }),

  prodName: style({
    width: "40%",
    padding: "1rem",
    fontSize: "0.85rem",
  }),

  prodPrice: style({
    width: "20%",
    padding: "1rem",
    fontSize: "0.85rem",
  }),

  prodPath: style({
    width: "40%",
    padding: "1rem",
    fontSize: "0.85rem",
  }),
};
