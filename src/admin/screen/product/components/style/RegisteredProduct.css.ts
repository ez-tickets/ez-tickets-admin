import { style } from "@vanilla-extract/css";

export const registeredProductStyle = {
  name: style({
    width: "50%",
    padding: "1rem",
    fontSize: "1rem",
  }),

  imgContainer: style({
    width: "50%",
    padding: "0.2rem 0.5rem",
    fontSize: "0.85rem",
  }),

  img: style({
    width: "9rem",
    height: "7rem",
    border: "1px dotted lightgray",
    boxShadow: "1px 2px 3px lightgray",
  }),
};
