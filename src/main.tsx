import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { HomeProvider } from "./Contexts/homeContext";
import { ResidentProvider } from "./Contexts/residentContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResidentProvider>
        <HomeProvider>
          <App />
        </HomeProvider>
      </ResidentProvider>
    </BrowserRouter>
  </React.StrictMode>
);
