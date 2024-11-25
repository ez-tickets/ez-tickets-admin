import { style } from "@vanilla-extract/css";

export const registeredCategoryListStyle = {
  listContainer: style({
    margin: "2rem 3rem",
  }),

  listTitle: style({
    margin: "0.5rem 1rem",
  }),

  listHeader: style({
    display: "flex",
    alignItems: "center",
    backgroundColor: "#e1e1e1",
    border: "1px solid lightgray",
  }),

  headerName: style({
    width: "100%",
    padding: "1rem",
  }),
};
