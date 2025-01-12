import { globalStyle, style } from "@vanilla-extract/css";

export const textAreaStyle = {
  textArea: style({
    position: "relative",
    width: "60%",
    padding: "1.75rem 0rem",
  }),

  value: style({
    width: "80%",
    height: "100px",
    padding: "1rem",
    border: "1px solid rgba(0,0,0,0.3)",
    borderRadius: "5px",
    boxShadow: "0px 1px 6px rgba(0,0,0,0.2)",
  }),
};

globalStyle(`${textAreaStyle.textArea} span`, {
  padding: "0 0.5rem",
  color: "red",
});

globalStyle(`${textAreaStyle.textArea} p`, {
  color: "gray",
  textIndent: "0.5rem",
});
