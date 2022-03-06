import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'


import { FooterOverlay, Newsletter } from '../../components'
import { images } from '../../constants'

import './Footer.css'

const Footer = () => {
  return (
    <div className="app__footer section__padding">
        <FooterOverlay />
        <Newsletter />
        <footer className="app__footer-links">
            <div className="app__footer-links_contactus">
                <h1 className="app__footer-headtext">Contact us</h1>
                <p className="p__opensans" style={{ color: '#AAA'}}>9 W 53rd St, New York, NY 10019, USA</p>
                <p className="p__opensans" style={{ color: '#AAA'}}>+1 212-344-1230</p>
                <p className="p__opensans" style={{ color: '#AAA'}}>+1 212-555-1230</p>
            </div>
            <div className="app__footer-links_social">
                <img src={images.gericht} alt="footer_logo" />
                <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
                <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }} />
                <div className="app__footer-links_social-icons">
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>
            <div className="app__footer-links_workinghour">
                <p className="p__cormorant">Working Hours</p>
                <p className="p__opensans" style={{ color: '#AAA'}}>Monday-Friday:</p>
                <p className="p__opensans" style={{ color: '#AAA'}}>08:00 am -12:00 am</p>
                <p className="p__opensans" style={{ color: '#AAA'}}>Saturday-Sunday:</p>
                <p className="p__opensans" style={{ color: '#AAA'}}>07:00am -11:00 pm</p>
            </div>
        </footer>
        <div className="app__footer-copyright">
            <p className="p__opensans" style={{ color: '#AAA'}}>2021 Gerícht. All Rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer