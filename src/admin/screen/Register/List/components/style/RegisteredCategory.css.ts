import { style } from "@vanilla-extract/css";

export const registeredCategoryStyle = {
  categoryItem: style({
    marginTop: "1px",
    border: "1px solid lightgray",
  }),

  category: style({
    width: "100%",
    padding: "1rem",
    fontSize: "0.85rem",
  }),
};
