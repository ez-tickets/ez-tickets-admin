import { style } from "@vanilla-extract/css";

export const registeredProductListStyle = {
  listContainer: style({
    margin: "2rem 3rem",
  }),

  listTitle: style({
    margin: "0.5rem 1.5rem",
  }),

  listHeader: style({
    display: "flex",
    alignItems: "center",
    backgroundColor: "#e1e1e1",
    border: "1px solid lightgray",
  }),

  headerName: style({
    width: "40%",
    padding: "1rem",
  }),

  headerPrice: style({
    width: "20%",
    padding: "1rem",
  }),

  headerPath: style({
    width: "40%",
    padding: "1rem",
  }),
};
