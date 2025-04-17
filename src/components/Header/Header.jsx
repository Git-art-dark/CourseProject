import { svgProps } from "../../data";

import Navbar from "./LinkPages/Navbar";

const locate = "Краснодар";

export default function Header() {
  return (
    <header>
      <div id="right-navbar">
        
        <Navbar />
      </div>

      <div id="left-navbar">
        <h1 className="arsenal-sc-regular">
          Ваш регион:{" "}
          <a href="#" className="arsenal-sc-bold header-nav-text">
            {locate}
          </a>
        </h1>
        <button className="button-nav-search-cart">
          {/* <img src={iconSearch} alt="search" className='test1'/> */}

          <svg
            width="45"
            height="45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={svgProps[0].d} fill={svgProps[0].fill} />
          </svg>
        </button>

        <button className="button-nav arsenal-sc-bold">Войти</button>
        <button className="button-nav-search-cart">
          {/* <img src={iconCart} alt="cart" /> */}
          <svg
            width="45"
            height="45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={svgProps[1].d} fill={svgProps[1].fill} />
          </svg>
        </button>
      </div>
    </header>
  );
}
