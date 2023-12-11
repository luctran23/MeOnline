import React from "react";
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./routes";

const GlobalStyle = createGlobalStyle`
  *, body {
    padding: 0;
    margin: 0;
    font-family: Inter;
  }
`;

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <AppRoutes />
        </>
    );
};
