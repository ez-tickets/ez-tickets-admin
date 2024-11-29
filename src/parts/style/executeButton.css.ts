import { style } from "@vanilla-extract/css";

export const executeButtonStyle = {
  run: style({
    margin: "7rem 1rem",
    padding: "10px 20px",
    display: "block",
    border: "1px solid rgba(0,0,0,0.4)",
    borderRadius: "5px",
    boxShadow: "1px 2px 3px rgba(0,0,0,0.4)",
    ":hover": {
      backgroundColor: "gold",
    },
  }),

  reset: style({
    margin: "7rem 1rem",
    padding: "10px 20px",
    display: "block",
    border: "1px solid rgba(0,0,0,0.4)",
    borderRadius: "5px",
    boxShadow: "1px 2px 3px rgba(0,0,0,0.4)",
    ":hover": {
      backgroundColor: "rgba(79,255,165,0.84)",
    },
  }),

  //edit Modal --------------------------------------------
  editModalUpdate: style({
    margin: "5rem 1rem 0",
    padding: "10px 20px",
    display: "block",
    border: "1px solid rgba(0,0,0,0.4)",
    borderRadius: "5px",
    boxShadow: "1px 2px 3px rgba(0,0,0,0.4)",
    ":hover": {
      backgroundColor: "gold",
    },
  }),

  editModalReset: style({
    margin: "5rem 1rem 0",
    padding: "10px 20px",
    display: "block",
    border: "1px solid rgba(0,0,0,0.4)",
    borderRadius: "5px",
    boxShadow: "1px 2px 3px rgba(0,0,0,0.4)",
    ":hover": {
      backgroundColor: "rgba(79,255,165,0.84)",
    },
  }),

  editModalDelete: style({
    margin: "5rem 1rem 0",
    padding: "10px 20px",
    display: "block",
    border: "1px solid rgba(0,0,0,0.4)",
    borderRadius: "5px",
    boxShadow: "1px 2px 3px rgba(0,0,0,0.4)",
    ":hover": {
      backgroundColor: "crimson",
    },
  }),

  //confirm Modal ---------------------------------------
  confirmModalYes: style({
    width: "12rem",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "5px",
    boxShadow: "2px 2px 8px lightgray",
    ":hover": {
      backgroundColor: "gold",
    },
  }),

  confirmModalCancel: style({
    width: "12rem",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "5px",
    boxShadow: "2px 2px 8px lightgray",
    ":hover": {
      backgroundColor: "lightgray",
    },
  }),
};
