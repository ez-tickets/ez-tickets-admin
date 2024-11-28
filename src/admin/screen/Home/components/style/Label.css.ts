import { style } from "@vanilla-extract/css";

export const labelStyle = {
  label: style({
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

  labelTitle: style({
    textAlign: "center",
    fontSize: "2rem",
    margin: "30px 0",
    color: "#3b3b3b",
  }),
};
