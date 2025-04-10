import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "./components/MainScreen/MainScreen.css";
import "./components/Header/Header.css";
import "./components/Discount/Discount.css";
import "./components/NewItems/NewItems.css";
import "./components/Partners/Partners.css";
import "./components/Footer/Footer.css";

import "./assets/adaptive1600.css";
import "./assets/adaptive360.css";

createRoot(document.getElementById("root")).render(<App />);
