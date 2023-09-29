import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./style/index.css";
import Provider from "./store/Provider";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
