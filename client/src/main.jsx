import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import { CategoryProvider } from "./context/CategoryContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
      <CategoryProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </CategoryProvider>
  </StrictMode>
);
  