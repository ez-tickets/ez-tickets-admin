import { style } from "@vanilla-extract/css";

export const registeredProdListStyle = {
  img: style({
    marginLeft: "4rem",
    width: "20%",
    padding: "1rem",
    fontSize: "0.9rem",
    // backgroundColor: "yellow"
  }),

  name: style({
    width: "25%",
    padding: "1rem",
    fontSize: "0.9rem",
    // backgroundColor: "green"
  }),

  desc: style({
    width: "35%",
    padding: "1rem",
    fontSize: "0.9rem",
    // backgroundColor: "blue"
  }),

  price: style({
    width: "15%",
    padding: "1rem",
    fontSize: "0.9rem",
    // backgroundColor: "red"
  }),
};
