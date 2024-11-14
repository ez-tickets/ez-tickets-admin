import { style } from "@vanilla-extract/css";

export const loginStyle = {
  backScreen: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#eaeaea",
  }),

  container: style({
    padding: "60px 10px",
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: "2px 2px 4px gray, 4px 4px 8px gray",
  }),

  text: style({
    color: "#727272",
    textAlign: "center",
  }),

  inputId: style({
    width: 300,
    height: 40,
    marginBottom: 30,
    padding: 8,
    fontSize: "1.25rem",
    border: "0.5px solid gray",
    borderRadius: "2px",
    boxShadow: "2px 2px 3px rgba(0,0,0,0.2)",
  }),

  inputPass: style({
    width: 300,
    height: 40,
    marginBottom: 60,
    padding: 8,
    fontSize: "1.25rem",
    border: "0.5px solid gray",
    borderRadius: "2px",
    boxShadow: "2px 2px 3px rgba(0,0,0,0.2)",
  }),

  form: style({
    padding: 50,
  }),

  error: style({
    marginBottom: 5,
    color: "red",
    fontSize: "0.9rem",
  }),

  button: style({
    width: 300,
    height: 50,
    color: "white",
    textAlign: "center",
    backgroundColor: "#1b3bbd",
    border: "0.5px solid gray",
    borderRadius: "3px",
    boxShadow: "2px 2px 3px rgba(0,0,0,0.2)",
  }),
};
