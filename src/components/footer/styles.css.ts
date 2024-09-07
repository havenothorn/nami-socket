import { style } from "@vanilla-extract/css";

export const footer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#F5F5F5",
});

export const social = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  paddingLeft: "1rem",
});

export const github = style({
  width: "2rem",
  height: "2rem",
});

export const linkedIn = style({
  width: "2rem",
  height: "2rem",
});
