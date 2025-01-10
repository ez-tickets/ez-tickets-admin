import { style } from "@vanilla-extract/css";

export const registeredCategoryStyle = {
  list: style({
    width: "100%",
    padding: "1rem 1rem 1rem 0",
    fontSize: "0.85rem",
    background: "#fff",
    border: "1px solid lightgray",
    ":hover": {
      border: "1px solid rgba(41,255,223,1)",
    },
  }),

  congruent: style({
    marginRight: "2rem",
    cursor: "grab",
    padding: "1rem",
  }),
};
