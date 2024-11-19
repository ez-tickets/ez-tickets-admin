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

  item: style({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "250px",
    height: "250px",
    borderRadius: "10px",
    border: "1px solid rgba(0,0,0,0.3)",
    boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
    ":hover": {
      backgroundColor: "gold",
    },
  }),

  itemTitle: style({
    textAlign: "center",
    fontSize: "2rem",
    margin: "30px 0",
    color: "#3b3b3b",
  }),

  itemIcon: style({
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }),
};
