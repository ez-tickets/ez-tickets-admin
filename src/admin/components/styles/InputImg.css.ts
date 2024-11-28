import { style } from "@vanilla-extract/css";

export const inputImgStyle = {
  inputImg: style({
    position: "relative",
    width: "60%",
    display: "flex",
    alignItems: "center",
  }),

  imgChooseButton: style({
    padding: "5px",
    border: "1px solid lightgray",
    borderRadius: "5px",
    boxShadow: "1px 2px 3px lightgray",
  }),

  imgText: style({
    textAlign: "center",
  }),

  img: style({
    width: "9rem",
    height: "7rem",
    margin: "0 12rem",
    border: "1px dotted lightgray",
    boxShadow: "1px 2px 3px lightgray",
  }),
};
