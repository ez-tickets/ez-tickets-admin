import { style } from "@vanilla-extract/css";

export const categoryRegisterStyle = {
  categoryRegisterContainer: style({
    height: "100vh",
    backgroundColor: "#fff",
  }),

  header: style({
    position: "sticky",
    top: 0,
    left: 0,
    width: "100%",
    padding: "0.37rem 1rem",
    backgroundColor: "#fff",
    borderBottom: "1px solid lightgray",
    boxShadow: "0px 1px 6px rgba(0,0,0,0.5)",
    zIndex: 100,
  }),
};
