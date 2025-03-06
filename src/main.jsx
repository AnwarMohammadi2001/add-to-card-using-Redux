import React from "react";
import ReactDOM from "react-dom/client"; // Ensure to import from 'react-dom/client'
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";

import "./index.css";

// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
