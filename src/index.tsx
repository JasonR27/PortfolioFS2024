import React from "react";
import ReactDOMClient from "react-dom/client";
import { Mobile } from "./screens/Mobile/Mobile";
import { ThemeProvider } from "./theme/ThemeProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
  <ThemeProvider>
    <Mobile />
  </ThemeProvider>
);