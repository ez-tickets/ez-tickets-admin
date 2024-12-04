import { globalStyle, style } from "@vanilla-extract/css";

export const itemStyle = {
  item: style({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "250px",
    height: "250px",
    borderRadius: "10px",
    border: "1px solid rgba(0,0,0,0.3)",
    boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
    ":hover": {
      backgroundColor: "gold",
    },
  }),
};

globalStyle(`${itemStyle.item} p`, {
  textAlign: "center",
  fontSize: "2rem",
  margin: "30px 0",
  color: "#3b3b3b",
});

globalStyle(`${itemStyle.item} svg`, {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100px",
  height: "100px",
  color: "#818181",
  strokeWidth: 1.5,
});
