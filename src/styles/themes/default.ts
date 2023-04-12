import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  uploading: {
    iconBg: "#e9e3f8",
    iconColor: "#ac96e4",
    progressColor: "linear-gradient(90deg, rgba(58, 97, 237, 0.52) 0%, #7c3aed 100%)",
    progressText: "#9892a6",
  },
  done: {
    iconBg: "#daf2d9",
    iconColor: "#73b172",
    progressColor: "#73b172",
    progressText: "#4e884d",
  },
  error: {
    iconBg: "#f2d9d9",
    iconColor: "#e36363",
    progressColor: "white",
    progressText: "#e36363",
  },
}