import { style } from "@vanilla-extract/css";

export const productOptionStyle = {
  option: style({
    ":before": {
      content: "⚪︎",
      fontSize: "12px",
      color: "gray",
    },
  }),

  optionPrice: style({
    ":before": {
      content: "（ ¥",
      paddingLeft: "10px",
    },
    ":after": {
      content: " ）",
    },
  }),
};
