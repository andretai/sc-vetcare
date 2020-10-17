import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Menu from "./menu"
import style from "../styles/components/header.module.css"

import logo from "../images/vetcare-logo-mod.png"
import hero from "../images/hero.png"

const Header = ({ siteTitle }) => {
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <div className={`${style.hero}`}>
        <div className="w-1/2 bg-red-100"></div>
        <div className="w-1/2">
          <img className={`${style.hero_img}`} src={hero} alt="hero cat"/>
        </div>
        <div className={`${style.header}`}>
          <div className={`${style.logo_div}`}>
            <img className="w-12" src={logo} alt="vetcare-logo"/>
            <div className="flex font-bold">
              <h4 className="text-green-500">Vet</h4>
              <h4 className="text-red-400">Care</h4>
            </div>
          </div>
          <div className={`${style.navigation}`}>
            <ol className={`${style.nav_bar}`}>
              <li className={`${style.nav_link}`}>
                <Link to="/">home</Link>
              </li>
              <li className={`${style.nav_link}`}>
                <Link to="/services">services</Link>
              </li>
              <li className={`${style.nav_link}`}>
                <Link to="/gallery">gallery</Link>
              </li>
              <li className={`${style.nav_link}`}>
                <Link to="/about">about</Link>
              </li>
              <li className={`${style.nav_link}`}>
                <Link to="/contact">contact</Link>
              </li>
            </ol>
            <button className={`${style.nav_btn}`}>+60123456789</button>
          </div>
          <div className={`${style.header_menu}`}>
            <button onClick={() => setMenu(true)}>
              <svg className="w-6 text-gray-800 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            { menu ? <Menu setMenu={() => setMenu(false)} /> : null }
          </div>
        </div>
        <div className={`${style.caption}`}>
          <h5 className={`${style.precaption}`}>Boarding, Treating, and Vaccinating</h5>
          <h2 className="my-6 font-bold">We Care for Pets.</h2>
          <h5 className={`${style.subcaption}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
          <button className={`${style.contact_btn}`}>
            <h5>Contact Us</h5>
            <svg className="w-3 ml-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg>        
          </button>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
