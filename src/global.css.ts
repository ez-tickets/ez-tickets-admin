import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#F8F8FF",
  userSelect: "none",
  overflow: "hidden",
  WebkitUserSelect: "none",
  fontFamily: "Noto Sans JP",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
