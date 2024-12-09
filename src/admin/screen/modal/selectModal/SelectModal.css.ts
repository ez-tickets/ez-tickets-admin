import { style } from "@vanilla-extract/css";

export const selectModalStyle = {
  title: style({
    padding: "10px 20px",
  }),

  headerContainer: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),

  closeIcon: style({
    position: "absolute",
    top: "0.5rem",
    right: "1rem",
    color: "red",
  }),
};

export const selectModal = {
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
    width: "30%",
    height: "40%",
    padding: "0",
    backgroundColor: "#fff",
  },
};
