import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthorsBooksProvider } from "./contexts/AuthorsBooksContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthorsBooksProvider>
      <App />
    </AuthorsBooksProvider>
  </StrictMode>
);
