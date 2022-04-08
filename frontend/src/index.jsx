import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./router/App";

const rootElement = document.getElementById("root");
const renderRoot = createRoot(rootElement);

renderRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
