import React from "react";
import ReactDOM from "react-dom/client";

// fonts
import "@fontsource/poppins";
import "@fontsource/roboto";

// styles
import "./index.css";

// contexts
import { LanguageProvider } from "./contexts/LanguageProvider";

// app
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
