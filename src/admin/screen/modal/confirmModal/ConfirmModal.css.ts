import { style } from "@vanilla-extract/css";

export const confirmModalStyle = {
  container: style({
    minWidth: "40%",
    minHeight: "30%",
  }),

  text: style({
    margin: "1.5rem 0",
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
    position: "relative",
    top: "52%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    width: "45%",
    height: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "1rem",
  },
};
