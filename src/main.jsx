import React from "react";
import ReactDOM from "react-dom/client";
import { DataProvider } from "./context/food.context";
import "./index.css";
import Home from "./pages/home/home.page";

// Render the app into the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <Home />
    </DataProvider>
  </React.StrictMode>
);
