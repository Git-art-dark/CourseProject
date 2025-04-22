import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "./components/MainScreen/MainScreen.css";
import "./components/Header/Header.css";
import "./components/Discount/Discount.css";
import "./components/NewItems/NewItems.css";
import "./components/Partners/Partners.css";
import "./components/Footer/Footer.css";
import "./components/Header/LinkPages/Navbar.css";
import "./components/ScrollToTopButton/ScrollToTopButton.css";
import "./pages/ServicesPage/ServicesPage.css";
import "./components/Button/Button.css";
import "./pages/NotFoundPage/NotFoundPage.css";
import "./pages/п/tov.css"

import "./assets/adaptive1600.css";
import "./assets/adaptive360.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
