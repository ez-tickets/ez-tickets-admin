import { globalStyle, style } from "@vanilla-extract/css";

export const inputImgStyle = {
  inputImg: style({
    position: "relative",
    width: "60%",
    padding: "0.5rem 0",
    display: "flex",
    alignItems: "center",
  }),

  imgContainer: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: "5rem",
  }),

  img: style({
    width: "160px",
    height: "120px",
    aspectRatio: "4/3",
    border: "1px dotted lightgray",
    boxShadow: "1px 2px 3px lightgray",
  }),

  selectContainer: style({
    display: "flex",
    flexDirection: "column",
  }),
};

globalStyle(`${inputImgStyle.inputImg} button`, {
  padding: "10px 15px",
  fontSize: "0.9rem",
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
