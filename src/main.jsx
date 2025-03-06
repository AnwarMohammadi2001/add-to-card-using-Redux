import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // Ensure to import from 'react-dom/client'
import App from "./App";

import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";

// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
