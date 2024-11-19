import { style } from "@vanilla-extract/css";

export const homeStyle = {
  homeContainer: style({
    position: "relative",
    width: "95%",
    margin: "30px auto 60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),

  gridContainer: style({
    display: "grid",
    gridTemplateColumns: "250px 250px 250px",
    placeItems: "center",
    gap: "15px",
  }),
};
