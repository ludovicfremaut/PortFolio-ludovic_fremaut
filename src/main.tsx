import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ScrollProvider } from "./components/ScrollProvider"; // adapte le chemin si besoin

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </React.StrictMode>
);
