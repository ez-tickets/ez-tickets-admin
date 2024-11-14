import {style} from "@vanilla-extract/css";

export const sideBarStyle = ({
  sideContainer: style({
    width: "20%",
    height: "100vh",
    color: "white",
    backgroundColor: "#12263A",
    overflowY: "scroll",
    "::-webkit-scrollbar": {
      display: "none",
    }
  }),

  wrapper: style({
    position: "relative",
    width: "100%",
  }),

  home: style({
    position: "sticky",
    top: 0,
    left: 0,
    width: "294px",
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
    padding: "10px 0",
    transition: 'background-color 0.3s',
    ":hover": {
      cursor: "pointer",
      backgroundColor: "#2a5583",
    }
  }),

  summary: style({
    textIndent: "1rem",
  }),

  li: style({
    color: "white",
    textIndent: "2rem",
    padding: "5px 0",
    listStyle: "none",
    ":hover": {
      backgroundColor: "rgba(41,255,223,0.71)",
    }
  })
})