import { style } from "@vanilla-extract/css";

export const registerListStyle = {
  registerListContainer: style({
    height: "100vh",
  }),

  header: style({
    position: "sticky",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0.37rem 1rem",
    backgroundColor: "#fff",
    borderBottom: "1px solid lightgray",
    boxShadow: "0px 1px 6px rgba(0,0,0,0.5)",
    zIndex: 100,
  }),

  title: style({
    width: "20%",
  }),
};

export const editModalStyle = {
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 100,
  },
  content: {
    position: "relative",
    top: "52%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "90%",
    backgroundColor: "#fff",
  },
};
