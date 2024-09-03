import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  height: "5rem",
  justifyContent: "space-between",
  borderBottom: "1px solid #ccc",
  backgroundColor: "#F9FFDD",
});

export const logo = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  paddingLeft: "1rem",
});

export const logoImg = style({
  width: "4rem",
  height: "4rem",
});

export const nav = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  paddingRight: "1rem",
});

export const menu = style({
  fontSize: "1.2rem",
  textDecoration: "none",
  color: "#333",
});
