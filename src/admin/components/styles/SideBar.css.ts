import { globalStyle, style } from "@vanilla-extract/css";

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

  textContainer: style({
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "12px 0",
  }),

  arrow: style({
    marginRight: "10px",
  }),

  addButton: style({
    width: "1.5rem",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    ":hover": {
      backgroundColor: "rgba(255,255,255,0.46)",
    },
  }),
};

globalStyle(`${sideBarStyle.contentsContainer} details`, {
  transition: "background-color 0.3s",
});

globalStyle(`${sideBarStyle.contentsContainer} details:hover`, {
  cursor: "pointer",
  backgroundColor: "#2a5583",
});

globalStyle(`${sideBarStyle.contentsContainer} summary`, {
  fontSize: "14px",
  textIndent: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

globalStyle(
  `${sideBarStyle.contentsContainer} summary::-webkit-details-marker`,
  {
    display: "none",
  },
);

globalStyle(`${sideBarStyle.contentsContainer} a`, {
  display: "block",
  fontSize: "14px",
  color: "white",
  textIndent: "2.5rem",
  padding: "12px 0",
  listStyle: "none",
});

globalStyle(`${sideBarStyle.contentsContainer} a:hover`, {
  backgroundColor: "rgba(41,255,223,0.71)",
});
