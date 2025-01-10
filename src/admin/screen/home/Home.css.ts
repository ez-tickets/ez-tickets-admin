import { style } from "@vanilla-extract/css";

export const homeStyle = {
  homeContainer: style({
    position: "relative",
    margin: "0 40px",
    paddingBottom: "2rem",
  }),

  gridContainer: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "1rem",
    gap: "1rem",
  }),
};
