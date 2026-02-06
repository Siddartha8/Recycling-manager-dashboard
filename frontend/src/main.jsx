import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";   // ✅ THIS WAS MISSING
import { MantineProvider, createTheme } from "@mantine/core";
import App from "./App";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  primaryColor: "green",
  defaultRadius: "md",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
