import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DiscountPage from "./pages/DiscountPage/DiscountPage";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import ShopsPage from "./pages/ShopsPage/ShopsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} index />
        <Route path="/discount" element={<DiscountPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
