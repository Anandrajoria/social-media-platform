import ReactDOM from "react-dom/client";
import App from "./App";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a root
const root = ReactDOM.createRoot(rootElement);

import { BrowserRouter } from "react-router-dom";
// Render the app
root.render(
  <>
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <App />
    </BrowserRouter>
  </>
);
