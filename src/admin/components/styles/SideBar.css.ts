import { style } from "@vanilla-extract/css";

export const sideBarStyle = {
  sideContainer: style({
    width: "20%",
    height: "100vh",
    color: "white",
    backgroundColor: "#12263A",
    overflowY: "scroll",
    borderRight: "1px solid white",
    boxSizing: "border-box",
    zIndex: 10,
    "::-webkit-scrollbar": {
      width: "4px",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "#232E33",
      borderRadius: "5px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(35,215,189, 0.8)",
      borderRadius: "5px",
      border: "0.5px solid #35af98",
    },
  }),

  wrapper: style({
    position: "relative",
    width: "100%",
  }),

  home: style({
    position: "sticky",
    top: 0,
    left: 0,
    width: "100%",
    padding: "15px 20px",
    color: "white",
    backgroundColor: "#12263A",
    borderBottom: "1px solid white",
    zIndex: 100,
  }),

  contentsContainer: style({
    position: "relative",
    paddingBottom: "30px",
  }),

  details: style({
    transition: "background-color 0.3s",
    ":hover": {
      cursor: "pointer",
      backgroundColor: "#2a5583",
    },
  }),

  summary: style({
    fontSize: "14px",
    textIndent: "1rem",
    padding: "12px 0",
  }),

  li: style({
    fontSize: "14px",
    color: "white",
    textIndent: "2rem",
    padding: "12px 0",
    listStyle: "none",
    ":hover": {
      backgroundColor: "rgba(41,255,223,0.71)",
    },
  }),
};
