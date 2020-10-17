import React from 'react'
import { Link } from 'gatsby'
import style from "../styles/components/menu.module.css"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png"
import youtube from "../images/youtube.png"

const Menu = ({ setMenu }) => {
  return (
    <div className={`${style.menu}`}>
      <div className={`${style.menu_close}`}>
        <button onClick={() => setMenu()}>
          <svg className={`${style.menu_close_icon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
        </button>
      </div>
      <ol className={`${style.menu_navigation}`}>
        <h4 className={`${style.menu_navigation_link}`}><Link to="/">home</Link></h4>
        <h4 className={`${style.menu_navigation_link}`}><Link to="/services">services</Link></h4>
        <h4 className={`${style.menu_navigation_link}`}><Link to="/gallery">gallery</Link></h4>
        <h4 className={`${style.menu_navigation_link}`}><Link to="/about">about</Link></h4>
        <h4 className={`${style.menu_navigation_link}`}><Link to="/contact">contact</Link></h4>
      </ol>
      <ol className={`${style.menu_social}`}>
        <li><img className={`${style.menu_social_icon}`} src={facebook} alt="facebook"/></li>
        <li><img className={`${style.menu_social_icon}`} src={twitter} alt="twitter"/></li>
        <li><img className={`${style.menu_social_icon}`} src={instagram} alt="instagram"/></li>
        <li><img className={`${style.menu_social_icon}`} src={youtube} alt="youtube"/></li>
      </ol>
    </div>
  )
}

export default Menu