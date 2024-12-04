import { globalStyle, style } from "@vanilla-extract/css";

export const inputStyle = {
  input: style({
    position: "relative",
    width: "60%",
    padding: "2.5rem 0rem",
  }),
};

globalStyle(`${inputStyle.input} span`, {
  padding: "0 0.5rem",
  color: "red",
});

globalStyle(`${inputStyle.input} p`, {
  color: "gray",
  textIndent: "0.5rem",
});

globalStyle(`${inputStyle.input} input`, {
  width: "80%",
  padding: "1rem",
  backgroundColor: "#fff",
  border: "1px solid rgba(0,0,0,0.3)",
  borderRadius: "2px",
  boxShadow: "0px 1px 6px rgba(0,0,0,0.5)",
});
