import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Test from "./test.jsx";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "https://www.google.com/" },
  "Visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App />
      <test />
      {reactElement}
    </>
  </StrictMode>
);
