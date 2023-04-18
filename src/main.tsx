import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./ui/store/store";
import { Provider } from "react-redux";

import App from "./ui/app/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
