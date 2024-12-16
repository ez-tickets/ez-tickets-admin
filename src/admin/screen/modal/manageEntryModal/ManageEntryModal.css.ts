import { style } from "@vanilla-extract/css";

export const manageEntryModal = {
  headerContainer: style({
    position: "sticky",
    width: "100%",
    height: "60px",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "1px 2px 3px lightgray",
    zIndex: 100,
  }),

  title: style({
    padding: "0 20px",
  }),

  closeIcon: style({
    position: "absolute",
    top: "0.5rem",
    right: "1rem",
    color: "red",
  }),
};

export const manageEntryModalContainer = {
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
    padding: 0,
    backgroundColor: "#fff",
  },
};
