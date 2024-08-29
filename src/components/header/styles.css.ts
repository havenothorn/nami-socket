import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  height: "5rem",
  justifyContent: "space-between",
  borderBottom: "1px solid #ccc",
});

export const logo = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const nav = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
});

export const menu = style({
  fontSize: "1.2rem",
  textDecoration: "none",
  color: "#333",
});
