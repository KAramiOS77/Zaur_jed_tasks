import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataContextComp } from "context/DataContext";
import { ModeContextComp } from "context/ModeContext";
import { AlertContextComp } from "context/AlertContext";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { RootReducer } from "reducer/RooReducer";

const store = createStore(RootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataContextComp>
    <Provider store={store}>
      <ModeContextComp>
        <AlertContextComp>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AlertContextComp>
      </ModeContextComp>
    </Provider>
  </DataContextComp>
);
