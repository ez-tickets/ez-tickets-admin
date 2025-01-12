import { style } from "@vanilla-extract/css";

export const listItemStyle = {
  item: style({
    marginTop: "1px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "1px solid lightgray",
    ":hover": {
      border: "1px solid rgba(41,255,223,1)",
      cursor: "pointer",
      boxShadow:
        "1px 1px 1px rgba(41,255,223,1) inset, -1px -1px 1px rgba(41,255,223,1) inset",
    },
  }),
};
