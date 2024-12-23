import { style } from "@vanilla-extract/css";

export const manageEntryModal = {
  content: style({
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    "::-webkit-scrollbar": {
      width: "4px",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "#c3c5c5",
      borderRadius: "5px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(35,215,189, 0.8)",
      borderRadius: "5px",
      border: "0.5px solid #35af98",
    },
  }),

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

  delete: style({
    padding: "5px",
    marginRight: "1rem",
    color: "red",
    scale: 1.5,
    border: "1px solid rgba(0,0,0,0.1)",
    boxShadow: "1px 2px 5px lightgray",
    borderRadius: "5px"
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
