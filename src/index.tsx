import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import type { SetupWorker } from "msw";
import App from "./App";
import "./index.css";

if (process.env.REACT_APP_MSW === "TRUE") {
  const { worker } = require("./mocks/browser");
  (worker as SetupWorker).start({ onUnhandledRequest: "bypass" });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
