import React from 'react'
import { Link } from 'gatsby'
import style from "../styles/components/footer.module.css"

import logo from "../images/vetcare-logo-mod.png"
import facebook from "../images/facebook_light.png"
import twitter from "../images/twitter_light.png"
import instagram from "../images/instagram_light.png"
import youtube from "../images/youtube_light.png"

const Footer = () => {
  return (
    <div>
      <div className={`${style.section}`}>
        <h4 className={`text-center`}>Leave us a message</h4>
        <h2 className={`${style.title} font-semibold text-center`}>Get in Touch</h2>
        <div>
          <div className={`${style.name_fields}`}>
            <div className={`${style.input_div}`}>
              <label htmlFor="fname">First Name</label>
              <input className={`${style.input_field}`} type="text" name="fname"/>
            </div>
            <div className={`${style.input_div}`}>
              <label htmlFor="lname">Last Name</label>
              <input className={`${style.input_field}`} type="text" name="lname"/>
            </div>
          </div>
          <div className={`${style.input_div}`}>
            <label htmlFor="phone">Phone</label>
            <input className={`${style.input_field}`} type="text" name="lname"/>
          </div>
          <div className={`${style.input_div}`}>
            <label htmlFor="email">E-mail</label>
            <input className={`${style.input_field}`} type="text" name="lname"/>
          </div>
          <div className={`${style.input_div}`}>
            <label htmlFor="message">Message</label>
            <input className={`${style.input_field}`} type="text" name="lname"/>
          </div>
          <div className={`${style.submit_div}`}>
            <button className={`${style.submit_btn}`}>send</button>
          </div>
        </div>
      </div>
      <footer>
        <div className={`${style.footer}`}>
          <div className={`${style.footer_section}`}>
            <div className={`${style.logo_div} ${style.footer_subsection}`}>
              <img className="w-16" src={logo} alt="vetcare-logo"/>
              <div className="flex font-bold">
                <h3 className="text-green-500">Vet</h3>
                <h3 className="text-red-400">Care</h3>
              </div>
            </div>
            <h4 className={`${style.footer_subsection} text-gray-500`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          </div>
          <div className={`${style.footer_section}`}>
            <h2 className={`${style.footer_subsection}`}>Pages</h2>
            <ol className={`${style.nav_div}`}>
              <li className={`${style.nav_link}`}><Link to="/">home</Link></li>
              <li className={`${style.nav_link}`}><Link to="/services">services</Link></li>
              <li className={`${style.nav_link}`}><Link to="/gallery">gallery</Link></li>
              <li className={`${style.nav_link}`}><Link to="/about">about</Link></li>
              <li className={`${style.nav_link}`}><Link to="/contact">contact us</Link></li>
            </ol>
          </div>
          <div className={`${style.footer_section}`}>
            <h2 className={`${style.footer_subsection}`}>Subscription</h2>
            <h4 className={`${style.footer_subsection} text-gray-500`}>Subscribe to our weekly newsletter to learn more about your pets!</h4>
            <div className={`${style.footer_subsection} ${style.footer_subscribe}`}>
              <input className={`${style.subscribe_input}`} type="email" placeholder="E-mail"/>
              <button className={`${style.subscribe_submit}`}>
                <svg className={`w-6 text-red-400 fill-current`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z"/></svg>
              </button>
            </div>
          </div>
          <div className={`${style.btm_footer_section}`}>
            <hr></hr>
            <div className={`${style.btm_footer}`}>
              <p>
                © {new Date().getFullYear()} Andre Tai
              </p>
              <ol className={`${style.social_div}`}>
                <li><img className={`${style.social_link}`} src={facebook} alt="facebook"/></li>
                <li><img className={`${style.social_link}`} src={instagram} alt="instagram"/></li>
                <li><img className={`${style.social_link}`} src={twitter} alt="twitter"/></li>
                <li><img className={`${style.social_link}`} src={youtube} alt="youtube"/></li>
              </ol>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
