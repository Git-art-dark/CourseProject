import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header className="margin-top-header" />
      <Outlet />
      <Footer></Footer>
    </>
  );
}
