import { globalStyle, style } from "@vanilla-extract/css";

export const inputImgStyle = {
  inputImg: style({
    position: "relative",
    width: "60%",
    display: "flex",
    alignItems: "center",
  }),

  img: style({
    width: "9rem",
    height: "7rem",
    margin: "0 10rem",
    border: "1px dotted lightgray",
    boxShadow: "1px 2px 3px lightgray",
  }),

  selectContainer: style({
    display: "flex",
    flexDirection: "column",
  }),
};

globalStyle(`${inputImgStyle.inputImg} button`, {
  padding: "10px 20px",
  border: "1px solid lightgray",
  borderRadius: "5px",
  boxShadow: "1px 2px 3px lightgray",
});

globalStyle(`${inputImgStyle.inputImg} div p`, {
  textAlign: "center",
});

globalStyle(`${inputImgStyle.selectContainer} span`, {
  color: "red",
  textAlign: "center",
});
