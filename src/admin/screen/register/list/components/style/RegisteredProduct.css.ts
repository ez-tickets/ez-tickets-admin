import { style } from "@vanilla-extract/css";

export const registeredProductStyle = {
  item: style({
    marginTop: "1px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid lightgray",
    ":hover": {
      border: "1px solid rgba(41,255,223,1)",
      cursor: "pointer",
      boxShadow:
        "1px 1px 1px rgba(41,255,223,1) inset, -1px -1px 1px rgba(41,255,223,1) inset",
    },
  }),

  name: style({
    width: "40%",
    padding: "1rem",
    fontSize: "0.85rem",
  }),

  price: style({
    width: "20%",
    padding: "1rem",
    fontSize: "0.85rem",
  }),

  path: style({
    width: "40%",
    padding: "1rem",
    fontSize: "0.85rem",
  }),

  img: style({
    width: "9rem",
    height: "7rem",
    border: "1px dotted lightgray",
    boxShadow: "1px 2px 3px lightgray",
  }),
};
