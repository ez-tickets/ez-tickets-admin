import { style } from "@vanilla-extract/css";

export const editModalStyle = {
  closeIcon: style({
    position: "absolute",
    top: "0.5rem",
    right: "1rem",
    color: "red",
  }),
};

export const editModalContainer = {
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
