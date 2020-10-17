import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import style from "../styles/pages/index.module.css"

import care1 from "../images/care_1.png"
import care2 from "../images/care_2.png"
import care3 from "../images/care_3.png"

import hero from "../images/hero-cat.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      {/* Services */}
      <div className={`${style.layout_section}`}>
        <h4 className={`${style.section}`}>Our professional Services</h4>
        <h2 className={`${style.section} font-semibold`}>Best Pet Care Services</h2>
        <div className={`${style.services}`}>
          <div className={`${style.services_div}`}>
            <div className={`${style.services_img}`}>
              <img src={care1} alt="pet boarding"/>
            </div>
            <h3 className={`mb-6`}>Pet Boarding</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          </div>
          <div className={`${style.services_div}`}>
            <div className={`${style.services_img}`}>
              <img src={care2} alt="pet treatment"/>
            </div>
            <h3 className={`mb-6`}>Pet Treatment</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          </div>
          <div className={`${style.services_div}`}>
            <div className={`${style.services_img}`}>
              <img src={care3} alt="pet vaccination"/>
            </div>
            <h3 className={`mb-6`}>Vaccination</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className={`${style.layout_section} ${style.testimonial}`}>
        <div className={`${style.testi_img_div}`}>
          <img className={`${style.testi_img}`} src={hero} alt="hero cat"/>
          <div className={`${style.testi_img_caption}`}>
            <button className={`${style.caption_btn} bg-indigo-500`}>
              <svg className="w-6 mr-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z"/></svg>
              <h5>Experienced team of veterinarians.</h5>
            </button>
            <button className={`${style.caption_btn} bg-green-500`}>
              <svg className="w-6 mr-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z"/></svg>
              <h5>Exceptional facilities and care.</h5>
            </button>
          </div>
        </div>
        <div className={`${style.testi_caption_div}`}>
          <h2 className={`${style.testi_caption_section} font-bold`}>Committed to Provide the Best</h2>
          <h4 className={`${style.testi_caption_section} font-semibold`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <h4 className={`${style.testi_caption_section}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          <button className={`${style.testi_caption_btn}`}>read more</button>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
