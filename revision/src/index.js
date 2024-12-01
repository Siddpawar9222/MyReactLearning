import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./store/Store.js";
import { BrowserRouter } from "react-router-dom";
import App1 from "./App1.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={Store}>
      <BrowserRouter>
        {/* <App /> */}
        <App1/>
      </BrowserRouter>
    </Provider>
  </>
);
