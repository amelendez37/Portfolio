import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { injectGlobal } from "styled-components";

import App from "./app.jsx";

injectGlobal`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }
`;

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
