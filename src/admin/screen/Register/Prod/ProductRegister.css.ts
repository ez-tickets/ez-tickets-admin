import { style } from "@vanilla-extract/css";

export const productRegisterStyle = {
  productRegisterContainer: style({
    height: "100vh",
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

export const modalStyle = {
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 100,
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40rem",
    height: "20rem",
    backgroundColor: "#fff",
    borderRadius: "1rem",
  },
};
