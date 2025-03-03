import logo from '/favicon.ico'
import iconSearch from '/icon-search.svg'
import iconCart from '/cart.svg'

import { pages, svgProps } from '../data'

const locate = "Краснодар"

function Navbar(props) {
    return (
        <a href='#' className='pt-serif-bold header-nav-text'>{props.title}</a>

    )
    
}

export default function Header() {
    return (
      <header>
          <img src={logo} alt="Logo" id="main-logo"/>
          <Navbar title={pages[0]}/>
          <Navbar title={pages[1]}/>
          <Navbar title={pages[2]}/>
          <Navbar title={pages[3]}/>
          <Navbar title={pages[4]}/>

          <div id='left-navbar'>
            <h1 className='pt-serif-bold'>Ваш регион: <a href="#" className='pt-serif-bold header-nav-text'>{locate}</a>
            </h1>
            <button className='button-nav-search-cart'>
              {/* <img src={iconSearch} alt="search" className='test1'/> */}

              <svg width="45" height="45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={svgProps[0].d} fill={svgProps[0].fill}/>
              </svg>
            </button>

            <button className='button-nav pt-serif-bold'>Войти</button>
            <button className='button-nav-search-cart'>
              {/* <img src={iconCart} alt="cart" /> */}
              <svg width="45" height="45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={svgProps[1].d} fill={svgProps[1].fill}/>
              </svg>
            </button>
          </div>
      </header>
    )
  }