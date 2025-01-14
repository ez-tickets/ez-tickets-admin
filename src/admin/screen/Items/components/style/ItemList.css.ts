import { style } from "@vanilla-extract/css";

export const itemListStyle = {
  img: style({
    width: "15%",
    padding: "1rem",
    fontSize: "0.9rem",
    // backgroundColor: "yellow"
    "@media": {
      "screen and (max-width: 950px)": {
        fontSize: "0.75rem",
      },
    },
  }),

  name: style({
    width: "25%",
    padding: "1rem",
    fontSize: "0.9rem",
    // backgroundColor: "green"
    "@media": {
      "screen and (max-width: 950px)": {
        fontSize: "0.75rem",
      },
    },
  }),

  desc: style({
    width: "30%",
    padding: "1rem",
    fontSize: "0.9rem",
    // backgroundColor: "blue"
    "@media": {
      "screen and (max-width: 950px)": {
        fontSize: "0.75rem",
      },
    },
  }),

  price: style({
    width: "15%",
    padding: "1rem",
    fontSize: "0.9rem",
    // backgroundColor: "red"
    "@media": {
      "screen and (max-width: 950px)": {
        fontSize: "0.75rem",
      },
    },
  }),

  category: style({
    width: "15%",
    padding: "1rem",
    fontSize: "0.9rem",
    // backgroundColor: "pink"
    "@media": {
      "screen and (max-width: 950px)": {
        fontSize: "0.75rem",
      },
    },
  }),
};
