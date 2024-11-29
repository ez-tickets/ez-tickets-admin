import { style } from "@vanilla-extract/css";

export const confirmModalStyle = {
  text: style({
    margin: "3.5rem 0",
    fontSize: "1.25rem",
    textAlign: "center",
  }),

  buttonContainer: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
};

export const confirmModalContainer = {
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
