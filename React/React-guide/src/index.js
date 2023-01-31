import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataContextComp } from "context/DataContext";
import { ModeContextComp } from "context/ModeContext";
import { AlertContextComp } from "context/AlertContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataContextComp>
    <ModeContextComp>
      <AlertContextComp>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AlertContextComp>
    </ModeContextComp>
  </DataContextComp>
);
