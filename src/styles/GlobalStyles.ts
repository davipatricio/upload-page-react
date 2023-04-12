import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    background: #fbfaff;
    min-height: 100vh;
    font-family: "Inter";
    line-height: 130%;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 440px;
    width: 90%;
    margin: auto;
  }
`;
