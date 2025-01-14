import { style } from "@vanilla-extract/css";

export const listContainerStyle = {
  container: style({
    margin: "2rem 3rem",
    paddingBottom: "4rem",
  }),

  topContainer: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),

  title: style({
    margin: "0.5rem 1rem",
  }),
};
