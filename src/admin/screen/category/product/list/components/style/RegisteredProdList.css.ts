import { style } from "@vanilla-extract/css";

export const registeredProdListStyle = {
  buttonContainer: style({
    display: "flex",
  }),

  img: style({
    width: "20%",
    padding: "1rem",
    textIndent: "2.5rem",
    fontSize: "0.9rem",
    // backgroundColor: "yellow",
    "@media": {
      "screen and (max-width: 950px)": {
        textIndent: "0",
        fontSize: "0.75rem",
        textAlign: "center",
      },
    },
  }),

  name: style({
    width: "25%",
    padding: "1rem",
    fontSize: "0.9rem",
    // backgroundColor: "green",
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
    // backgroundColor: "blue",
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
    // backgroundColor: "red",
    "@media": {
      "screen and (max-width: 950px)": {
        fontSize: "0.75rem",
      },
    },
  }),

  saleState: style({
    width: "10%",
    padding: "1rem",
    fontSize: "0.9rem",
    textAlign: "center",
    // backgroundColor: "purple",
    "@media": {
      "screen and (max-width: 950px)": {
        fontSize: "0.75rem",
        padding: "1rem 0.5rem",
      },
    },
  }),
};
