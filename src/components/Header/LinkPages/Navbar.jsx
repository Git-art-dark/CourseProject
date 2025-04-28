import { Link, NavLink } from "react-router-dom";
import { logo } from "../../../imports";

export default function Navbar() {
  return (
    <>
      <Link to={"/"}>
        <img src={logo} alt="Logo" id="main-logo" />
      </Link>
      <NavLink className={"link arsenal-sc-regular"} to={"/"}>
        Главная
      </NavLink>
      <NavLink className={"link arsenal-sc-regular"} to={"/catalog"}>
        Каталог
      </NavLink>
      <NavLink className={"link arsenal-sc-regular"} to={"/discount"}>
        Акции
      </NavLink>
      <NavLink className={"link arsenal-sc-regular"} to={"/service"}>
        Услуги
      </NavLink>
      <NavLink className={"link arsenal-sc-regular"} to={"/contacts"}>
        Контакты
      </NavLink>
    </>
  );
}
